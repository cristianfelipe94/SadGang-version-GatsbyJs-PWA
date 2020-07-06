import React, { useState, useEffect } from "react"

import "./layout.css"
import "./styles.css"

const ProductsLayout = () => {
  const [renderData, setRenderData] = useState({
    data: [],
    loading: true,
  })

  const { data, loading } = renderData

  const Airtable = require("airtable")

  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: "keyj6RHcqPkLG3De5",
  })

  const base = Airtable.base("appBPQYtn0w9cMX1f")

  useEffect(() => {
    return base("Furniture")
      .select({
        maxRecords: 5,
        fields: ["Name", "Type", "Images", "Color", "Description", "UnitCost"],
        sort: [
          {
            field: "Name",
            direction: "asc",
          },
        ],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(record => {
            setRenderData(prevState => ({
              data: [...prevState.data, record.fields],
              loading: false,
            }))

            console.log("Got data: ", renderData)
          })

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error("Error response from AirTable: ,", err)
            return
          }
        }
      )
  }, [])

  return (
    <>
      {loading
        ? "Loading data..."
        : data.map((baseElement, index) => (
            <>
              <div className="airtable__product">
                <h3>{baseElement.Name}</h3>
                {baseElement.Images.length
                  ? baseElement.Images.map(element => {
                      return <img src={element.url}></img>
                    })
                  : ""}
                <p>{baseElement.Description}</p>
                <p>{baseElement.Type}</p>
                {baseElement.Color.length
                  ? baseElement.Color.map(element => {
                      return <p>{element}</p>
                    })
                  : ""}
                <p>{baseElement.UnitCost}</p>
              </div>
              {index !== data.length - 1 ? (
                <div className="gradient--panel--small">
                  <span className="gradient--line" />
                </div>
              ) : (
                ""
              )}
            </>
          ))}
    </>
  )
}

export default ProductsLayout
