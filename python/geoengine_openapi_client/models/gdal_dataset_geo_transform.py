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


from typing import Union
from pydantic import BaseModel, Field, StrictFloat, StrictInt
from geoengine_openapi_client.models.coordinate2_d import Coordinate2D

class GdalDatasetGeoTransform(BaseModel):
    """
    GdalDatasetGeoTransform
    """
    origin_coordinate: Coordinate2D = Field(..., alias="originCoordinate")
    x_pixel_size: Union[StrictFloat, StrictInt] = Field(..., alias="xPixelSize")
    y_pixel_size: Union[StrictFloat, StrictInt] = Field(..., alias="yPixelSize")
    __properties = ["originCoordinate", "xPixelSize", "yPixelSize"]

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
    def from_json(cls, json_str: str) -> GdalDatasetGeoTransform:
        """Create an instance of GdalDatasetGeoTransform from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of origin_coordinate
        if self.origin_coordinate:
            _dict['originCoordinate'] = self.origin_coordinate.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> GdalDatasetGeoTransform:
        """Create an instance of GdalDatasetGeoTransform from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return GdalDatasetGeoTransform.parse_obj(obj)

        _obj = GdalDatasetGeoTransform.parse_obj({
            "origin_coordinate": Coordinate2D.from_dict(obj.get("originCoordinate")) if obj.get("originCoordinate") is not None else None,
            "x_pixel_size": obj.get("xPixelSize"),
            "y_pixel_size": obj.get("yPixelSize")
        })
        return _obj


