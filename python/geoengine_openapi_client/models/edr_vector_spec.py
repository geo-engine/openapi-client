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
from pydantic import BaseModel, Field, StrictStr

class EdrVectorSpec(BaseModel):
    """
    EdrVectorSpec
    """
    time: StrictStr = Field(...)
    x: StrictStr = Field(...)
    y: Optional[StrictStr] = None
    __properties = ["time", "x", "y"]

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
    def from_json(cls, json_str: str) -> EdrVectorSpec:
        """Create an instance of EdrVectorSpec from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # set to None if y (nullable) is None
        # and __fields_set__ contains the field
        if self.y is None and "y" in self.__fields_set__:
            _dict['y'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> EdrVectorSpec:
        """Create an instance of EdrVectorSpec from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return EdrVectorSpec.parse_obj(obj)

        _obj = EdrVectorSpec.parse_obj({
            "time": obj.get("time"),
            "x": obj.get("x"),
            "y": obj.get("y")
        })
        return _obj


