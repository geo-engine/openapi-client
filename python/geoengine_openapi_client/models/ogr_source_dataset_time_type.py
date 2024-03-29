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
from inspect import getfullargspec
import json
import pprint
import re  # noqa: F401

from typing import Any, List, Optional
from pydantic import BaseModel, Field, StrictStr, ValidationError, validator
from geoengine_openapi_client.models.none_ogr_source_dataset_time_type import NoneOgrSourceDatasetTimeType
from geoengine_openapi_client.models.start_duration_ogr_source_dataset_time_type import StartDurationOgrSourceDatasetTimeType
from geoengine_openapi_client.models.start_end_ogr_source_dataset_time_type import StartEndOgrSourceDatasetTimeType
from geoengine_openapi_client.models.start_ogr_source_dataset_time_type import StartOgrSourceDatasetTimeType
from typing import Union, Any, List, TYPE_CHECKING
from pydantic import StrictStr, Field

OGRSOURCEDATASETTIMETYPE_ONE_OF_SCHEMAS = ["NoneOgrSourceDatasetTimeType", "StartDurationOgrSourceDatasetTimeType", "StartEndOgrSourceDatasetTimeType", "StartOgrSourceDatasetTimeType"]

class OgrSourceDatasetTimeType(BaseModel):
    """
    OgrSourceDatasetTimeType
    """
    # data type: NoneOgrSourceDatasetTimeType
    oneof_schema_1_validator: Optional[NoneOgrSourceDatasetTimeType] = None
    # data type: StartOgrSourceDatasetTimeType
    oneof_schema_2_validator: Optional[StartOgrSourceDatasetTimeType] = None
    # data type: StartEndOgrSourceDatasetTimeType
    oneof_schema_3_validator: Optional[StartEndOgrSourceDatasetTimeType] = None
    # data type: StartDurationOgrSourceDatasetTimeType
    oneof_schema_4_validator: Optional[StartDurationOgrSourceDatasetTimeType] = None
    if TYPE_CHECKING:
        actual_instance: Union[NoneOgrSourceDatasetTimeType, StartDurationOgrSourceDatasetTimeType, StartEndOgrSourceDatasetTimeType, StartOgrSourceDatasetTimeType]
    else:
        actual_instance: Any
    one_of_schemas: List[str] = Field(OGRSOURCEDATASETTIMETYPE_ONE_OF_SCHEMAS, const=True)

    class Config:
        validate_assignment = True

    discriminator_value_class_map = {
    }

    def __init__(self, *args, **kwargs) -> None:
        if args:
            if len(args) > 1:
                raise ValueError("If a position argument is used, only 1 is allowed to set `actual_instance`")
            if kwargs:
                raise ValueError("If a position argument is used, keyword arguments cannot be used.")
            super().__init__(actual_instance=args[0])
        else:
            super().__init__(**kwargs)

    @validator('actual_instance')
    def actual_instance_must_validate_oneof(cls, v):
        instance = OgrSourceDatasetTimeType.construct()
        error_messages = []
        match = 0
        # validate data type: NoneOgrSourceDatasetTimeType
        if not isinstance(v, NoneOgrSourceDatasetTimeType):
            error_messages.append(f"Error! Input type `{type(v)}` is not `NoneOgrSourceDatasetTimeType`")
        else:
            match += 1
        # validate data type: StartOgrSourceDatasetTimeType
        if not isinstance(v, StartOgrSourceDatasetTimeType):
            error_messages.append(f"Error! Input type `{type(v)}` is not `StartOgrSourceDatasetTimeType`")
        else:
            match += 1
        # validate data type: StartEndOgrSourceDatasetTimeType
        if not isinstance(v, StartEndOgrSourceDatasetTimeType):
            error_messages.append(f"Error! Input type `{type(v)}` is not `StartEndOgrSourceDatasetTimeType`")
        else:
            match += 1
        # validate data type: StartDurationOgrSourceDatasetTimeType
        if not isinstance(v, StartDurationOgrSourceDatasetTimeType):
            error_messages.append(f"Error! Input type `{type(v)}` is not `StartDurationOgrSourceDatasetTimeType`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in OgrSourceDatasetTimeType with oneOf schemas: NoneOgrSourceDatasetTimeType, StartDurationOgrSourceDatasetTimeType, StartEndOgrSourceDatasetTimeType, StartOgrSourceDatasetTimeType. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in OgrSourceDatasetTimeType with oneOf schemas: NoneOgrSourceDatasetTimeType, StartDurationOgrSourceDatasetTimeType, StartEndOgrSourceDatasetTimeType, StartOgrSourceDatasetTimeType. Details: " + ", ".join(error_messages))
        else:
            return v

    @classmethod
    def from_dict(cls, obj: dict) -> OgrSourceDatasetTimeType:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> OgrSourceDatasetTimeType:
        """Returns the object represented by the json string"""
        instance = OgrSourceDatasetTimeType.construct()
        error_messages = []
        match = 0

        # use oneOf discriminator to lookup the data type
        _data_type = json.loads(json_str).get("type")
        if not _data_type:
            raise ValueError("Failed to lookup data type from the field `type` in the input.")

        # check if data type is `NoneOgrSourceDatasetTimeType`
        if _data_type == "NoneOgrSourceDatasetTimeType":
            instance.actual_instance = NoneOgrSourceDatasetTimeType.from_json(json_str)
            return instance

        # check if data type is `StartDurationOgrSourceDatasetTimeType`
        if _data_type == "StartDurationOgrSourceDatasetTimeType":
            instance.actual_instance = StartDurationOgrSourceDatasetTimeType.from_json(json_str)
            return instance

        # check if data type is `StartEndOgrSourceDatasetTimeType`
        if _data_type == "StartEndOgrSourceDatasetTimeType":
            instance.actual_instance = StartEndOgrSourceDatasetTimeType.from_json(json_str)
            return instance

        # check if data type is `StartOgrSourceDatasetTimeType`
        if _data_type == "StartOgrSourceDatasetTimeType":
            instance.actual_instance = StartOgrSourceDatasetTimeType.from_json(json_str)
            return instance

        # check if data type is `NoneOgrSourceDatasetTimeType`
        if _data_type == "none":
            instance.actual_instance = NoneOgrSourceDatasetTimeType.from_json(json_str)
            return instance

        # check if data type is `StartOgrSourceDatasetTimeType`
        if _data_type == "start":
            instance.actual_instance = StartOgrSourceDatasetTimeType.from_json(json_str)
            return instance

        # check if data type is `StartDurationOgrSourceDatasetTimeType`
        if _data_type == "startDuration":
            instance.actual_instance = StartDurationOgrSourceDatasetTimeType.from_json(json_str)
            return instance

        # check if data type is `StartEndOgrSourceDatasetTimeType`
        if _data_type == "startEnd":
            instance.actual_instance = StartEndOgrSourceDatasetTimeType.from_json(json_str)
            return instance

        # deserialize data into NoneOgrSourceDatasetTimeType
        try:
            instance.actual_instance = NoneOgrSourceDatasetTimeType.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into StartOgrSourceDatasetTimeType
        try:
            instance.actual_instance = StartOgrSourceDatasetTimeType.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into StartEndOgrSourceDatasetTimeType
        try:
            instance.actual_instance = StartEndOgrSourceDatasetTimeType.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into StartDurationOgrSourceDatasetTimeType
        try:
            instance.actual_instance = StartDurationOgrSourceDatasetTimeType.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into OgrSourceDatasetTimeType with oneOf schemas: NoneOgrSourceDatasetTimeType, StartDurationOgrSourceDatasetTimeType, StartEndOgrSourceDatasetTimeType, StartOgrSourceDatasetTimeType. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into OgrSourceDatasetTimeType with oneOf schemas: NoneOgrSourceDatasetTimeType, StartDurationOgrSourceDatasetTimeType, StartEndOgrSourceDatasetTimeType, StartOgrSourceDatasetTimeType. Details: " + ", ".join(error_messages))
        else:
            return instance

    def to_json(self) -> str:
        """Returns the JSON representation of the actual instance"""
        if self.actual_instance is None:
            return "null"

        to_json = getattr(self.actual_instance, "to_json", None)
        if callable(to_json):
            return self.actual_instance.to_json()
        else:
            return json.dumps(self.actual_instance)

    def to_dict(self) -> dict:
        """Returns the dict representation of the actual instance"""
        if self.actual_instance is None:
            return None

        to_dict = getattr(self.actual_instance, "to_dict", None)
        if callable(to_dict):
            return self.actual_instance.to_dict()
        else:
            # primitive type
            return self.actual_instance

    def to_str(self) -> str:
        """Returns the string representation of the actual instance"""
        return pprint.pformat(self.dict())


