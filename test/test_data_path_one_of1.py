# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.7.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from geoengine_openapi_client.models.data_path_one_of1 import DataPathOneOf1  # noqa: E501

class TestDataPathOneOf1(unittest.TestCase):
    """DataPathOneOf1 unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> DataPathOneOf1:
        """Test DataPathOneOf1
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `DataPathOneOf1`
        """
        model = DataPathOneOf1()  # noqa: E501
        if include_optional:
            return DataPathOneOf1(
                upload = ''
            )
        else:
            return DataPathOneOf1(
                upload = '',
        )
        """

    def testDataPathOneOf1(self):
        """Test DataPathOneOf1"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()