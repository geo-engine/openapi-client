# coding: utf-8

"""
    Geo Engine Pro API

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

class UpdateLayerCollection(BaseModel):
    """
    UpdateLayerCollection
    """
    description: StrictStr = Field(...)
    name: StrictStr = Field(...)
    properties: Optional[conlist(conlist(StrictStr, max_items=2, min_items=2))] = None
    __properties = ["description", "name", "properties"]

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
    def from_json(cls, json_str: str) -> UpdateLayerCollection:
        """Create an instance of UpdateLayerCollection from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> UpdateLayerCollection:
        """Create an instance of UpdateLayerCollection from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return UpdateLayerCollection.parse_obj(obj)

        _obj = UpdateLayerCollection.parse_obj({
            "description": obj.get("description"),
            "name": obj.get("name"),
            "properties": obj.get("properties")
        })
        return _obj

