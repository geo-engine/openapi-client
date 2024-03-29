# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from geoengine_openapi_client.models.custom_ogr_source_time_format import CustomOgrSourceTimeFormat  # noqa: E501

class TestCustomOgrSourceTimeFormat(unittest.TestCase):
    """CustomOgrSourceTimeFormat unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CustomOgrSourceTimeFormat:
        """Test CustomOgrSourceTimeFormat
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CustomOgrSourceTimeFormat`
        """
        model = CustomOgrSourceTimeFormat()  # noqa: E501
        if include_optional:
            return CustomOgrSourceTimeFormat(
                custom_format = geoengine_openapi_client.models.date_time_parse_format.DateTimeParseFormat(
                    fmt = '', 
                    has_time = True, 
                    has_tz = True, ),
                format = 'custom'
            )
        else:
            return CustomOgrSourceTimeFormat(
                custom_format = geoengine_openapi_client.models.date_time_parse_format.DateTimeParseFormat(
                    fmt = '', 
                    has_time = True, 
                    has_tz = True, ),
                format = 'custom',
        )
        """

    def testCustomOgrSourceTimeFormat(self):
        """Test CustomOgrSourceTimeFormat"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
