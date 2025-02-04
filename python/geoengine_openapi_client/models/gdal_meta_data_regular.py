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


from typing import Dict, Optional
from pydantic import BaseModel, Field, StrictStr, conint, validator
from geoengine_openapi_client.models.gdal_dataset_parameters import GdalDatasetParameters
from geoengine_openapi_client.models.gdal_source_time_placeholder import GdalSourceTimePlaceholder
from geoengine_openapi_client.models.raster_result_descriptor import RasterResultDescriptor
from geoengine_openapi_client.models.time_interval import TimeInterval
from geoengine_openapi_client.models.time_step import TimeStep

class GdalMetaDataRegular(BaseModel):
    """
    GdalMetaDataRegular
    """
    cache_ttl: Optional[conint(strict=True, ge=0)] = Field(None, alias="cacheTtl")
    data_time: TimeInterval = Field(..., alias="dataTime")
    params: GdalDatasetParameters = Field(...)
    result_descriptor: RasterResultDescriptor = Field(..., alias="resultDescriptor")
    step: TimeStep = Field(...)
    time_placeholders: Dict[str, GdalSourceTimePlaceholder] = Field(..., alias="timePlaceholders")
    type: StrictStr = Field(...)
    __properties = ["cacheTtl", "dataTime", "params", "resultDescriptor", "step", "timePlaceholders", "type"]

    @validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in ('GdalMetaDataRegular'):
            raise ValueError("must be one of enum values ('GdalMetaDataRegular')")
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
    def from_json(cls, json_str: str) -> GdalMetaDataRegular:
        """Create an instance of GdalMetaDataRegular from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of data_time
        if self.data_time:
            _dict['dataTime'] = self.data_time.to_dict()
        # override the default output from pydantic by calling `to_dict()` of params
        if self.params:
            _dict['params'] = self.params.to_dict()
        # override the default output from pydantic by calling `to_dict()` of result_descriptor
        if self.result_descriptor:
            _dict['resultDescriptor'] = self.result_descriptor.to_dict()
        # override the default output from pydantic by calling `to_dict()` of step
        if self.step:
            _dict['step'] = self.step.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each value in time_placeholders (dict)
        _field_dict = {}
        if self.time_placeholders:
            for _key in self.time_placeholders:
                if self.time_placeholders[_key]:
                    _field_dict[_key] = self.time_placeholders[_key].to_dict()
            _dict['timePlaceholders'] = _field_dict
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> GdalMetaDataRegular:
        """Create an instance of GdalMetaDataRegular from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return GdalMetaDataRegular.parse_obj(obj)

        _obj = GdalMetaDataRegular.parse_obj({
            "cache_ttl": obj.get("cacheTtl"),
            "data_time": TimeInterval.from_dict(obj.get("dataTime")) if obj.get("dataTime") is not None else None,
            "params": GdalDatasetParameters.from_dict(obj.get("params")) if obj.get("params") is not None else None,
            "result_descriptor": RasterResultDescriptor.from_dict(obj.get("resultDescriptor")) if obj.get("resultDescriptor") is not None else None,
            "step": TimeStep.from_dict(obj.get("step")) if obj.get("step") is not None else None,
            "time_placeholders": dict(
                (_k, GdalSourceTimePlaceholder.from_dict(_v))
                for _k, _v in obj.get("timePlaceholders").items()
            )
            if obj.get("timePlaceholders") is not None
            else None,
            "type": obj.get("type")
        })
        return _obj


