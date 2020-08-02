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
              <div className="airtableProduct">
                <div className="airtableProduct__introContainer">
                  <h3 className="airtableProduct__productTitle">{baseElement.Name}</h3>
                  <p className="airtableProduct__productType">{baseElement.Type}</p>
                </div>
                {baseElement.Images.length
                  ? baseElement.Images.map(element => {
                      return (
                        <a 
                        href="https://api.whatsapp.com/send?phone=50672519994"
                        target="_blank"
                        className="airtableProduct__productImageContainer">
                          <img className="airtableProduct__productImage" src={element.url}></img>
                          <div
                            className="action--shop"
                          >
                            <span>Obtener más información</span>
                          </div>
                        </a>
                      )
                    })
                  : ""}
                <p className="airtableProduct__productDescription">{baseElement.Description}</p>
                <div className="airtableProduct__colorContainer">
                  <p>Colores disponibles:</p>
                  {baseElement.Color.length
                    ? baseElement.Color.map(element => {
                        return <span className="productColor">{element}</span>
                      })
                    : ""}
                </div>
                <div className="airtableProduct__costContainer">
                  <p>Precio:</p>
                  <div>
                    <span className="productCost">{baseElement.UnitCost}</span>
                    <div className="gradient--panel--small">
                      <span className="gradient--line" />
                    </div>
                  </div>
                </div>
              </div>
              {index !== data.length - 1 ? (
                <div className="gradient--panel--large">
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
