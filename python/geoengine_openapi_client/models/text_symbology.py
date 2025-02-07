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

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List
from geoengine_openapi_client.models.color_param import ColorParam
from geoengine_openapi_client.models.stroke_param import StrokeParam
from typing import Optional, Set
from typing_extensions import Self

class TextSymbology(BaseModel):
    """
    TextSymbology
    """ # noqa: E501
    attribute: StrictStr
    fill_color: ColorParam = Field(alias="fillColor")
    stroke: StrokeParam
    __properties: ClassVar[List[str]] = ["attribute", "fillColor", "stroke"]

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
        """Create an instance of TextSymbology from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of fill_color
        if self.fill_color:
            _dict['fillColor'] = self.fill_color.to_dict()
        # override the default output from pydantic by calling `to_dict()` of stroke
        if self.stroke:
            _dict['stroke'] = self.stroke.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of TextSymbology from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "attribute": obj.get("attribute"),
            "fillColor": ColorParam.from_dict(obj["fillColor"]) if obj.get("fillColor") is not None else None,
            "stroke": StrokeParam.from_dict(obj["stroke"]) if obj.get("stroke") is not None else None
        })
        return _obj


