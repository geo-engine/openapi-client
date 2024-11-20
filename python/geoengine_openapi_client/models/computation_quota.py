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

from datetime import datetime
from typing import List
from pydantic import BaseModel, Field, StrictStr, conlist
from geoengine_openapi_client.models.operator_quota import OperatorQuota

class ComputationQuota(BaseModel):
    """
    ComputationQuota
    """
    computation_id: StrictStr = Field(..., alias="computationId")
    operators: conlist(OperatorQuota) = Field(...)
    timestamp: datetime = Field(...)
    workflow_id: StrictStr = Field(..., alias="workflowId")
    __properties = ["computationId", "operators", "timestamp", "workflowId"]

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
    def from_json(cls, json_str: str) -> ComputationQuota:
        """Create an instance of ComputationQuota from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in operators (list)
        _items = []
        if self.operators:
            for _item in self.operators:
                if _item:
                    _items.append(_item.to_dict())
            _dict['operators'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> ComputationQuota:
        """Create an instance of ComputationQuota from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return ComputationQuota.parse_obj(obj)

        _obj = ComputationQuota.parse_obj({
            "computation_id": obj.get("computationId"),
            "operators": [OperatorQuota.from_dict(_item) for _item in obj.get("operators")] if obj.get("operators") is not None else None,
            "timestamp": obj.get("timestamp"),
            "workflow_id": obj.get("workflowId")
        })
        return _obj


