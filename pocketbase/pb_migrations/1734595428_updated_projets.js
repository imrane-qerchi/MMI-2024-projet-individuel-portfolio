/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5nfxog729l9hwz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8jqqejle",
    "name": "image_principale",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5nfxog729l9hwz")

  // remove
  collection.schema.removeField("8jqqejle")

  return dao.saveCollection(collection)
})
