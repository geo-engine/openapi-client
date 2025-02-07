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

from pydantic import BaseModel, ConfigDict, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List
from geoengine_openapi_client.models.gdal_loading_info_temporal_slice import GdalLoadingInfoTemporalSlice
from geoengine_openapi_client.models.raster_result_descriptor import RasterResultDescriptor
from typing import Optional, Set
from typing_extensions import Self

class GdalMetaDataList(BaseModel):
    """
    GdalMetaDataList
    """ # noqa: E501
    params: List[GdalLoadingInfoTemporalSlice]
    result_descriptor: RasterResultDescriptor = Field(alias="resultDescriptor")
    type: StrictStr
    __properties: ClassVar[List[str]] = ["params", "resultDescriptor", "type"]

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['GdalMetaDataList']):
            raise ValueError("must be one of enum values ('GdalMetaDataList')")
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
        """Create an instance of GdalMetaDataList from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in params (list)
        _items = []
        if self.params:
            for _item_params in self.params:
                if _item_params:
                    _items.append(_item_params.to_dict())
            _dict['params'] = _items
        # override the default output from pydantic by calling `to_dict()` of result_descriptor
        if self.result_descriptor:
            _dict['resultDescriptor'] = self.result_descriptor.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of GdalMetaDataList from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "params": [GdalLoadingInfoTemporalSlice.from_dict(_item) for _item in obj["params"]] if obj.get("params") is not None else None,
            "resultDescriptor": RasterResultDescriptor.from_dict(obj["resultDescriptor"]) if obj.get("resultDescriptor") is not None else None,
            "type": obj.get("type")
        })
        return _obj


