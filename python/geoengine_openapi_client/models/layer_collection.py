# coding: utf-8

"""
    Geo Engine API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from typing import List, Optional
from pydantic import BaseModel, Field, StrictStr, conlist
from geoengine_openapi_client.models.collection_item import CollectionItem
from geoengine_openapi_client.models.provider_layer_collection_id import ProviderLayerCollectionId

class LayerCollection(BaseModel):
    """
    LayerCollection
    """
    description: StrictStr = Field(...)
    entry_label: Optional[StrictStr] = Field(None, alias="entryLabel", description="a common label for the collection's entries, if there is any")
    id: ProviderLayerCollectionId = Field(...)
    items: conlist(CollectionItem) = Field(...)
    name: StrictStr = Field(...)
    properties: conlist(conlist(StrictStr, max_items=2, min_items=2)) = Field(...)
    __properties = ["description", "entryLabel", "id", "items", "name", "properties"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> LayerCollection:
        """Create an instance of LayerCollection from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of id
        if self.id:
            _dict['id'] = self.id.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in items (list)
        _items = []
        if self.items:
            for _item in self.items:
                if _item:
                    _items.append(_item.to_dict())
            _dict['items'] = _items
        # set to None if entry_label (nullable) is None
        # and __fields_set__ contains the field
        if self.entry_label is None and "entry_label" in self.__fields_set__:
            _dict['entryLabel'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> LayerCollection:
        """Create an instance of LayerCollection from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return LayerCollection.parse_obj(obj)

        _obj = LayerCollection.parse_obj({
            "description": obj.get("description"),
            "entry_label": obj.get("entryLabel"),
            "id": ProviderLayerCollectionId.from_dict(obj.get("id")) if obj.get("id") is not None else None,
            "items": [CollectionItem.from_dict(_item) for _item in obj.get("items")] if obj.get("items") is not None else None,
            "name": obj.get("name"),
            "properties": obj.get("properties")
        })
        return _obj


