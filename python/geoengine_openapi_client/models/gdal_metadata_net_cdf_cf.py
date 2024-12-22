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


from typing import Optional
from pydantic import BaseModel, Field, StrictInt, StrictStr, conint, validator
from geoengine_openapi_client.models.gdal_dataset_parameters import GdalDatasetParameters
from geoengine_openapi_client.models.raster_result_descriptor import RasterResultDescriptor
from geoengine_openapi_client.models.time_step import TimeStep

class GdalMetadataNetCdfCf(BaseModel):
    """
    Meta data for 4D `NetCDF` CF datasets  # noqa: E501
    """
    band_offset: conint(strict=True, ge=0) = Field(..., alias="bandOffset", description="A band offset specifies the first band index to use for the first point in time. All other time steps are added to this offset.")
    cache_ttl: Optional[conint(strict=True, ge=0)] = Field(None, alias="cacheTtl")
    end: StrictInt = Field(...)
    params: GdalDatasetParameters = Field(...)
    result_descriptor: RasterResultDescriptor = Field(..., alias="resultDescriptor")
    start: StrictInt = Field(...)
    step: TimeStep = Field(...)
    type: StrictStr = Field(...)
    __properties = ["bandOffset", "cacheTtl", "end", "params", "resultDescriptor", "start", "step", "type"]

    @validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in ('GdalMetadataNetCdfCf'):
            raise ValueError("must be one of enum values ('GdalMetadataNetCdfCf')")
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
    def from_json(cls, json_str: str) -> GdalMetadataNetCdfCf:
        """Create an instance of GdalMetadataNetCdfCf from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of params
        if self.params:
            _dict['params'] = self.params.to_dict()
        # override the default output from pydantic by calling `to_dict()` of result_descriptor
        if self.result_descriptor:
            _dict['resultDescriptor'] = self.result_descriptor.to_dict()
        # override the default output from pydantic by calling `to_dict()` of step
        if self.step:
            _dict['step'] = self.step.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> GdalMetadataNetCdfCf:
        """Create an instance of GdalMetadataNetCdfCf from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return GdalMetadataNetCdfCf.parse_obj(obj)

        _obj = GdalMetadataNetCdfCf.parse_obj({
            "band_offset": obj.get("bandOffset"),
            "cache_ttl": obj.get("cacheTtl"),
            "end": obj.get("end"),
            "params": GdalDatasetParameters.from_dict(obj.get("params")) if obj.get("params") is not None else None,
            "result_descriptor": RasterResultDescriptor.from_dict(obj.get("resultDescriptor")) if obj.get("resultDescriptor") is not None else None,
            "start": obj.get("start"),
            "step": TimeStep.from_dict(obj.get("step")) if obj.get("step") is not None else None,
            "type": obj.get("type")
        })
        return _obj


