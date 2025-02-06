# coding: utf-8

"""
    Geo Engine API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from geoengine_openapi_client.models.task_status_completed import TaskStatusCompleted

class TestTaskStatusCompleted(unittest.TestCase):
    """TaskStatusCompleted unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> TaskStatusCompleted:
        """Test TaskStatusCompleted
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `TaskStatusCompleted`
        """
        model = TaskStatusCompleted()
        if include_optional:
            return TaskStatusCompleted(
                description = '',
                info = None,
                status = 'completed',
                task_type = '',
                time_started = '',
                time_total = ''
            )
        else:
            return TaskStatusCompleted(
                status = 'completed',
                task_type = '',
                time_started = '',
                time_total = '',
        )
        """

    def testTaskStatusCompleted(self):
        """Test TaskStatusCompleted"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
