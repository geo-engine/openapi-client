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

from pydantic import BaseModel, ConfigDict, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from geoengine_openapi_client.models.gdal_dataset_parameters import GdalDatasetParameters
from geoengine_openapi_client.models.gdal_source_time_placeholder import GdalSourceTimePlaceholder
from geoengine_openapi_client.models.raster_result_descriptor import RasterResultDescriptor
from geoengine_openapi_client.models.time_interval import TimeInterval
from geoengine_openapi_client.models.time_step import TimeStep
from typing import Optional, Set
from typing_extensions import Self

class GdalMetaDataRegular(BaseModel):
    """
    GdalMetaDataRegular
    """ # noqa: E501
    cache_ttl: Optional[Annotated[int, Field(strict=True, ge=0)]] = Field(default=None, alias="cacheTtl")
    data_time: TimeInterval = Field(alias="dataTime")
    params: GdalDatasetParameters
    result_descriptor: RasterResultDescriptor = Field(alias="resultDescriptor")
    step: TimeStep
    time_placeholders: Dict[str, GdalSourceTimePlaceholder] = Field(alias="timePlaceholders")
    type: StrictStr
    __properties: ClassVar[List[str]] = ["cacheTtl", "dataTime", "params", "resultDescriptor", "step", "timePlaceholders", "type"]

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['GdalMetaDataRegular']):
            raise ValueError("must be one of enum values ('GdalMetaDataRegular')")
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of GdalMetaDataRegular from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
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
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of GdalMetaDataRegular from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "cacheTtl": obj.get("cacheTtl"),
            "dataTime": TimeInterval.from_dict(obj["dataTime"]) if obj.get("dataTime") is not None else None,
            "params": GdalDatasetParameters.from_dict(obj["params"]) if obj.get("params") is not None else None,
            "resultDescriptor": RasterResultDescriptor.from_dict(obj["resultDescriptor"]) if obj.get("resultDescriptor") is not None else None,
            "step": TimeStep.from_dict(obj["step"]) if obj.get("step") is not None else None,
            "timePlaceholders": dict(
                (_k, GdalSourceTimePlaceholder.from_dict(_v))
                for _k, _v in obj["timePlaceholders"].items()
            )
            if obj.get("timePlaceholders") is not None
            else None,
            "type": obj.get("type")
        })
        return _obj


