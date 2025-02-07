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
import json
import pprint
from pydantic import BaseModel, ConfigDict, Field, StrictStr, ValidationError, field_validator
from typing import Any, List, Optional
from geoengine_openapi_client.models.ogr_source_dataset_time_type_none import OgrSourceDatasetTimeTypeNone
from geoengine_openapi_client.models.ogr_source_dataset_time_type_start import OgrSourceDatasetTimeTypeStart
from geoengine_openapi_client.models.ogr_source_dataset_time_type_start_duration import OgrSourceDatasetTimeTypeStartDuration
from geoengine_openapi_client.models.ogr_source_dataset_time_type_start_end import OgrSourceDatasetTimeTypeStartEnd
from pydantic import StrictStr, Field
from typing import Union, List, Set, Optional, Dict
from typing_extensions import Literal, Self

OGRSOURCEDATASETTIMETYPE_ONE_OF_SCHEMAS = ["OgrSourceDatasetTimeTypeNone", "OgrSourceDatasetTimeTypeStart", "OgrSourceDatasetTimeTypeStartDuration", "OgrSourceDatasetTimeTypeStartEnd"]

class OgrSourceDatasetTimeType(BaseModel):
    """
    OgrSourceDatasetTimeType
    """
    # data type: OgrSourceDatasetTimeTypeNone
    oneof_schema_1_validator: Optional[OgrSourceDatasetTimeTypeNone] = None
    # data type: OgrSourceDatasetTimeTypeStart
    oneof_schema_2_validator: Optional[OgrSourceDatasetTimeTypeStart] = None
    # data type: OgrSourceDatasetTimeTypeStartEnd
    oneof_schema_3_validator: Optional[OgrSourceDatasetTimeTypeStartEnd] = None
    # data type: OgrSourceDatasetTimeTypeStartDuration
    oneof_schema_4_validator: Optional[OgrSourceDatasetTimeTypeStartDuration] = None
    actual_instance: Optional[Union[OgrSourceDatasetTimeTypeNone, OgrSourceDatasetTimeTypeStart, OgrSourceDatasetTimeTypeStartDuration, OgrSourceDatasetTimeTypeStartEnd]] = None
    one_of_schemas: Set[str] = { "OgrSourceDatasetTimeTypeNone", "OgrSourceDatasetTimeTypeStart", "OgrSourceDatasetTimeTypeStartDuration", "OgrSourceDatasetTimeTypeStartEnd" }

    model_config = ConfigDict(
        validate_assignment=True,
        protected_namespaces=(),
    )


    discriminator_value_class_map: Dict[str, str] = {
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

    @field_validator('actual_instance')
    def actual_instance_must_validate_oneof(cls, v):
        instance = OgrSourceDatasetTimeType.model_construct()
        error_messages = []
        match = 0
        # validate data type: OgrSourceDatasetTimeTypeNone
        if not isinstance(v, OgrSourceDatasetTimeTypeNone):
            error_messages.append(f"Error! Input type `{type(v)}` is not `OgrSourceDatasetTimeTypeNone`")
        else:
            match += 1
        # validate data type: OgrSourceDatasetTimeTypeStart
        if not isinstance(v, OgrSourceDatasetTimeTypeStart):
            error_messages.append(f"Error! Input type `{type(v)}` is not `OgrSourceDatasetTimeTypeStart`")
        else:
            match += 1
        # validate data type: OgrSourceDatasetTimeTypeStartEnd
        if not isinstance(v, OgrSourceDatasetTimeTypeStartEnd):
            error_messages.append(f"Error! Input type `{type(v)}` is not `OgrSourceDatasetTimeTypeStartEnd`")
        else:
            match += 1
        # validate data type: OgrSourceDatasetTimeTypeStartDuration
        if not isinstance(v, OgrSourceDatasetTimeTypeStartDuration):
            error_messages.append(f"Error! Input type `{type(v)}` is not `OgrSourceDatasetTimeTypeStartDuration`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in OgrSourceDatasetTimeType with oneOf schemas: OgrSourceDatasetTimeTypeNone, OgrSourceDatasetTimeTypeStart, OgrSourceDatasetTimeTypeStartDuration, OgrSourceDatasetTimeTypeStartEnd. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in OgrSourceDatasetTimeType with oneOf schemas: OgrSourceDatasetTimeTypeNone, OgrSourceDatasetTimeTypeStart, OgrSourceDatasetTimeTypeStartDuration, OgrSourceDatasetTimeTypeStartEnd. Details: " + ", ".join(error_messages))
        else:
            return v

    @classmethod
    def from_dict(cls, obj: Union[str, Dict[str, Any]]) -> Self:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Returns the object represented by the json string"""
        instance = cls.model_construct()
        error_messages = []
        match = 0

        # use oneOf discriminator to lookup the data type
        _data_type = json.loads(json_str).get("type")
        if not _data_type:
            raise ValueError("Failed to lookup data type from the field `type` in the input.")

        # check if data type is `OgrSourceDatasetTimeTypeNone`
        if _data_type == "none":
            instance.actual_instance = OgrSourceDatasetTimeTypeNone.from_json(json_str)
            return instance

        # check if data type is `OgrSourceDatasetTimeTypeStart`
        if _data_type == "start":
            instance.actual_instance = OgrSourceDatasetTimeTypeStart.from_json(json_str)
            return instance

        # check if data type is `OgrSourceDatasetTimeTypeStartDuration`
        if _data_type == "start+duration":
            instance.actual_instance = OgrSourceDatasetTimeTypeStartDuration.from_json(json_str)
            return instance

        # check if data type is `OgrSourceDatasetTimeTypeStartEnd`
        if _data_type == "start+end":
            instance.actual_instance = OgrSourceDatasetTimeTypeStartEnd.from_json(json_str)
            return instance

        # check if data type is `OgrSourceDatasetTimeTypeNone`
        if _data_type == "OgrSourceDatasetTimeTypeNone":
            instance.actual_instance = OgrSourceDatasetTimeTypeNone.from_json(json_str)
            return instance

        # check if data type is `OgrSourceDatasetTimeTypeStart`
        if _data_type == "OgrSourceDatasetTimeTypeStart":
            instance.actual_instance = OgrSourceDatasetTimeTypeStart.from_json(json_str)
            return instance

        # check if data type is `OgrSourceDatasetTimeTypeStartDuration`
        if _data_type == "OgrSourceDatasetTimeTypeStartDuration":
            instance.actual_instance = OgrSourceDatasetTimeTypeStartDuration.from_json(json_str)
            return instance

        # check if data type is `OgrSourceDatasetTimeTypeStartEnd`
        if _data_type == "OgrSourceDatasetTimeTypeStartEnd":
            instance.actual_instance = OgrSourceDatasetTimeTypeStartEnd.from_json(json_str)
            return instance

        # deserialize data into OgrSourceDatasetTimeTypeNone
        try:
            instance.actual_instance = OgrSourceDatasetTimeTypeNone.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into OgrSourceDatasetTimeTypeStart
        try:
            instance.actual_instance = OgrSourceDatasetTimeTypeStart.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into OgrSourceDatasetTimeTypeStartEnd
        try:
            instance.actual_instance = OgrSourceDatasetTimeTypeStartEnd.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into OgrSourceDatasetTimeTypeStartDuration
        try:
            instance.actual_instance = OgrSourceDatasetTimeTypeStartDuration.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into OgrSourceDatasetTimeType with oneOf schemas: OgrSourceDatasetTimeTypeNone, OgrSourceDatasetTimeTypeStart, OgrSourceDatasetTimeTypeStartDuration, OgrSourceDatasetTimeTypeStartEnd. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into OgrSourceDatasetTimeType with oneOf schemas: OgrSourceDatasetTimeTypeNone, OgrSourceDatasetTimeTypeStart, OgrSourceDatasetTimeTypeStartDuration, OgrSourceDatasetTimeTypeStartEnd. Details: " + ", ".join(error_messages))
        else:
            return instance

    def to_json(self) -> str:
        """Returns the JSON representation of the actual instance"""
        if self.actual_instance is None:
            return "null"

        if hasattr(self.actual_instance, "to_json") and callable(self.actual_instance.to_json):
            return self.actual_instance.to_json()
        else:
            return json.dumps(self.actual_instance)

    def to_dict(self) -> Optional[Union[Dict[str, Any], OgrSourceDatasetTimeTypeNone, OgrSourceDatasetTimeTypeStart, OgrSourceDatasetTimeTypeStartDuration, OgrSourceDatasetTimeTypeStartEnd]]:
        """Returns the dict representation of the actual instance"""
        if self.actual_instance is None:
            return None

        if hasattr(self.actual_instance, "to_dict") and callable(self.actual_instance.to_dict):
            return self.actual_instance.to_dict()
        else:
            # primitive type
            return self.actual_instance

    def to_str(self) -> str:
        """Returns the string representation of the actual instance"""
        return pprint.pformat(self.model_dump())


