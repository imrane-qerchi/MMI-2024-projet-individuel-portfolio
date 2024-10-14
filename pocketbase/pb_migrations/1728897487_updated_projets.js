/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5nfxog729l9hwz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2jf8a7dm",
    "name": "sous_titre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5nfxog729l9hwz")

  // remove
  collection.schema.removeField("2jf8a7dm")

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
      "maxSelect": 1,
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
