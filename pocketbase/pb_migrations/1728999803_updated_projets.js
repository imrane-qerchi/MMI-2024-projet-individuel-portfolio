/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5nfxog729l9hwz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y9pwgdpj",
    "name": "domaines",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "Communication",
        "Maquettage",
        "Développement",
        "Design"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5nfxog729l9hwz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y9pwgdpj",
    "name": "domaine",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "Communication",
        "Maquettage",
        "Développement",
        "Design"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
