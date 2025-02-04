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


from typing import List
from pydantic import BaseModel, Field, StrictStr, conlist, validator
from geoengine_openapi_client.models.gdal_loading_info_temporal_slice import GdalLoadingInfoTemporalSlice
from geoengine_openapi_client.models.raster_result_descriptor import RasterResultDescriptor

class GdalMetaDataList(BaseModel):
    """
    GdalMetaDataList
    """
    params: conlist(GdalLoadingInfoTemporalSlice) = Field(...)
    result_descriptor: RasterResultDescriptor = Field(..., alias="resultDescriptor")
    type: StrictStr = Field(...)
    __properties = ["params", "resultDescriptor", "type"]

    @validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in ('GdalMetaDataList'):
            raise ValueError("must be one of enum values ('GdalMetaDataList')")
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
    def from_json(cls, json_str: str) -> GdalMetaDataList:
        """Create an instance of GdalMetaDataList from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in params (list)
        _items = []
        if self.params:
            for _item in self.params:
                if _item:
                    _items.append(_item.to_dict())
            _dict['params'] = _items
        # override the default output from pydantic by calling `to_dict()` of result_descriptor
        if self.result_descriptor:
            _dict['resultDescriptor'] = self.result_descriptor.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> GdalMetaDataList:
        """Create an instance of GdalMetaDataList from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return GdalMetaDataList.parse_obj(obj)

        _obj = GdalMetaDataList.parse_obj({
            "params": [GdalLoadingInfoTemporalSlice.from_dict(_item) for _item in obj.get("params")] if obj.get("params") is not None else None,
            "result_descriptor": RasterResultDescriptor.from_dict(obj.get("resultDescriptor")) if obj.get("resultDescriptor") is not None else None,
            "type": obj.get("type")
        })
        return _obj


