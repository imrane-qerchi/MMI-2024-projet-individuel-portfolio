/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5nfxog729l9hwz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ueksuj3p",
    "name": "lien",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5nfxog729l9hwz")

  // remove
  collection.schema.removeField("ueksuj3p")

  return dao.saveCollection(collection)
})
