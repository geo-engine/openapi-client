# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.7.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from typing import List, Optional
from pydantic import BaseModel, Field, StrictStr, conlist, validator
from geoengine_openapi_client.models.provider_layer_collection_id import ProviderLayerCollectionId

class LayerCollectionListingWithType(BaseModel):
    """
    LayerCollectionListingWithType
    """
    description: StrictStr = Field(...)
    id: ProviderLayerCollectionId = Field(...)
    name: StrictStr = Field(...)
    properties: Optional[conlist(conlist(StrictStr, max_items=2, min_items=2))] = None
    type: StrictStr = Field(...)
    __properties = ["description", "id", "name", "properties", "type"]

    @validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in ('collection', 'layer'):
            raise ValueError("must be one of enum values ('collection', 'layer')")
        return value

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
    def from_json(cls, json_str: str) -> LayerCollectionListingWithType:
        """Create an instance of LayerCollectionListingWithType from a JSON string"""
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
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> LayerCollectionListingWithType:
        """Create an instance of LayerCollectionListingWithType from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return LayerCollectionListingWithType.parse_obj(obj)

        _obj = LayerCollectionListingWithType.parse_obj({
            "description": obj.get("description"),
            "id": ProviderLayerCollectionId.from_dict(obj.get("id")) if obj.get("id") is not None else None,
            "name": obj.get("name"),
            "properties": obj.get("properties"),
            "type": obj.get("type")
        })
        return _obj

