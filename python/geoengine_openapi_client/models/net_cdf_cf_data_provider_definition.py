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


from typing import Optional
from pydantic import BaseModel, Field, StrictInt, StrictStr, conint

class NetCdfCfDataProviderDefinition(BaseModel):
    """
    NetCdfCfDataProviderDefinition
    """
    cache_ttl: Optional[conint(strict=True, ge=0)] = Field(None, alias="cacheTtl")
    data: StrictStr = Field(..., description="Path were the `NetCDF` data can be found")
    description: StrictStr = Field(...)
    name: StrictStr = Field(...)
    overviews: StrictStr = Field(..., description="Path were overview files are stored")
    priority: Optional[StrictInt] = None
    __properties = ["cacheTtl", "data", "description", "name", "overviews", "priority"]

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
    def from_json(cls, json_str: str) -> NetCdfCfDataProviderDefinition:
        """Create an instance of NetCdfCfDataProviderDefinition from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # set to None if priority (nullable) is None
        # and __fields_set__ contains the field
        if self.priority is None and "priority" in self.__fields_set__:
            _dict['priority'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> NetCdfCfDataProviderDefinition:
        """Create an instance of NetCdfCfDataProviderDefinition from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return NetCdfCfDataProviderDefinition.parse_obj(obj)

        _obj = NetCdfCfDataProviderDefinition.parse_obj({
            "cache_ttl": obj.get("cacheTtl"),
            "data": obj.get("data"),
            "description": obj.get("description"),
            "name": obj.get("name"),
            "overviews": obj.get("overviews"),
            "priority": obj.get("priority")
        })
        return _obj


