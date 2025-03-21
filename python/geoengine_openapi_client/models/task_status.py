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
from geoengine_openapi_client.models.task_status_aborted import TaskStatusAborted
from geoengine_openapi_client.models.task_status_completed import TaskStatusCompleted
from geoengine_openapi_client.models.task_status_failed import TaskStatusFailed
from geoengine_openapi_client.models.task_status_running import TaskStatusRunning
from pydantic import StrictStr, Field
from typing import Union, List, Set, Optional, Dict
from typing_extensions import Literal, Self

TASKSTATUS_ONE_OF_SCHEMAS = ["TaskStatusAborted", "TaskStatusCompleted", "TaskStatusFailed", "TaskStatusRunning"]

class TaskStatus(BaseModel):
    """
    TaskStatus
    """
    # data type: TaskStatusRunning
    oneof_schema_1_validator: Optional[TaskStatusRunning] = None
    # data type: TaskStatusCompleted
    oneof_schema_2_validator: Optional[TaskStatusCompleted] = None
    # data type: TaskStatusAborted
    oneof_schema_3_validator: Optional[TaskStatusAborted] = None
    # data type: TaskStatusFailed
    oneof_schema_4_validator: Optional[TaskStatusFailed] = None
    actual_instance: Optional[Union[TaskStatusAborted, TaskStatusCompleted, TaskStatusFailed, TaskStatusRunning]] = None
    one_of_schemas: Set[str] = { "TaskStatusAborted", "TaskStatusCompleted", "TaskStatusFailed", "TaskStatusRunning" }

    model_config = ConfigDict(
        validate_assignment=True,
        protected_namespaces=(),
    )


    discriminator_value_class_map: Dict[str, str] = {
        'TaskStatusWithId': 'TaskStatusWithId'
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
        instance = TaskStatus.model_construct()
        error_messages = []
        match = 0
        # validate data type: TaskStatusRunning
        if not isinstance(v, TaskStatusRunning):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TaskStatusRunning`")
        else:
            match += 1
        # validate data type: TaskStatusCompleted
        if not isinstance(v, TaskStatusCompleted):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TaskStatusCompleted`")
        else:
            match += 1
        # validate data type: TaskStatusAborted
        if not isinstance(v, TaskStatusAborted):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TaskStatusAborted`")
        else:
            match += 1
        # validate data type: TaskStatusFailed
        if not isinstance(v, TaskStatusFailed):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TaskStatusFailed`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in TaskStatus with oneOf schemas: TaskStatusAborted, TaskStatusCompleted, TaskStatusFailed, TaskStatusRunning. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in TaskStatus with oneOf schemas: TaskStatusAborted, TaskStatusCompleted, TaskStatusFailed, TaskStatusRunning. Details: " + ", ".join(error_messages))
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
        _data_type = json.loads(json_str).get("status")
        if not _data_type:
            raise ValueError("Failed to lookup data type from the field `status` in the input.")

        # check if data type is `TaskStatusAborted`
        if _data_type == "aborted":
            instance.actual_instance = TaskStatusAborted.from_json(json_str)
            return instance

        # check if data type is `TaskStatusCompleted`
        if _data_type == "completed":
            instance.actual_instance = TaskStatusCompleted.from_json(json_str)
            return instance

        # check if data type is `TaskStatusFailed`
        if _data_type == "failed":
            instance.actual_instance = TaskStatusFailed.from_json(json_str)
            return instance

        # check if data type is `TaskStatusRunning`
        if _data_type == "running":
            instance.actual_instance = TaskStatusRunning.from_json(json_str)
            return instance

        # check if data type is `TaskStatusAborted`
        if _data_type == "TaskStatusAborted":
            instance.actual_instance = TaskStatusAborted.from_json(json_str)
            return instance

        # check if data type is `TaskStatusCompleted`
        if _data_type == "TaskStatusCompleted":
            instance.actual_instance = TaskStatusCompleted.from_json(json_str)
            return instance

        # check if data type is `TaskStatusFailed`
        if _data_type == "TaskStatusFailed":
            instance.actual_instance = TaskStatusFailed.from_json(json_str)
            return instance

        # check if data type is `TaskStatusRunning`
        if _data_type == "TaskStatusRunning":
            instance.actual_instance = TaskStatusRunning.from_json(json_str)
            return instance

        # check if data type is `TaskStatusWithId`
        if _data_type == "TaskStatusWithId":
            instance.actual_instance = TaskStatusWithId.from_json(json_str)
            return instance

        # deserialize data into TaskStatusRunning
        try:
            instance.actual_instance = TaskStatusRunning.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TaskStatusCompleted
        try:
            instance.actual_instance = TaskStatusCompleted.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TaskStatusAborted
        try:
            instance.actual_instance = TaskStatusAborted.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TaskStatusFailed
        try:
            instance.actual_instance = TaskStatusFailed.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into TaskStatus with oneOf schemas: TaskStatusAborted, TaskStatusCompleted, TaskStatusFailed, TaskStatusRunning. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into TaskStatus with oneOf schemas: TaskStatusAborted, TaskStatusCompleted, TaskStatusFailed, TaskStatusRunning. Details: " + ", ".join(error_messages))
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

    def to_dict(self) -> Optional[Union[Dict[str, Any], TaskStatusAborted, TaskStatusCompleted, TaskStatusFailed, TaskStatusRunning]]:
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


