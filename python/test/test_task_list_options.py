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
import datetime

from geoengine_openapi_client.models.task_list_options import TaskListOptions  # noqa: E501

class TestTaskListOptions(unittest.TestCase):
    """TaskListOptions unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> TaskListOptions:
        """Test TaskListOptions
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `TaskListOptions`
        """
        model = TaskListOptions()  # noqa: E501
        if include_optional:
            return TaskListOptions(
                filter = 'running',
                limit = 0,
                offset = 0
            )
        else:
            return TaskListOptions(
        )
        """

    def testTaskListOptions(self):
        """Test TaskListOptions"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
