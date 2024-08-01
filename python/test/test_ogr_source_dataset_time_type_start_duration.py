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

from geoengine_openapi_client.models.ogr_source_dataset_time_type_start_duration import OgrSourceDatasetTimeTypeStartDuration  # noqa: E501

class TestOgrSourceDatasetTimeTypeStartDuration(unittest.TestCase):
    """OgrSourceDatasetTimeTypeStartDuration unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> OgrSourceDatasetTimeTypeStartDuration:
        """Test OgrSourceDatasetTimeTypeStartDuration
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `OgrSourceDatasetTimeTypeStartDuration`
        """
        model = OgrSourceDatasetTimeTypeStartDuration()  # noqa: E501
        if include_optional:
            return OgrSourceDatasetTimeTypeStartDuration(
                duration_field = '',
                start_field = '',
                start_format = None,
                type = 'startDuration'
            )
        else:
            return OgrSourceDatasetTimeTypeStartDuration(
                duration_field = '',
                start_field = '',
                start_format = None,
                type = 'startDuration',
        )
        """

    def testOgrSourceDatasetTimeTypeStartDuration(self):
        """Test OgrSourceDatasetTimeTypeStartDuration"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
