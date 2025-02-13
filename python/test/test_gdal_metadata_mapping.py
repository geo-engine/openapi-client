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

from geoengine_openapi_client.models.gdal_metadata_mapping import GdalMetadataMapping

class TestGdalMetadataMapping(unittest.TestCase):
    """GdalMetadataMapping unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> GdalMetadataMapping:
        """Test GdalMetadataMapping
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `GdalMetadataMapping`
        """
        model = GdalMetadataMapping()
        if include_optional:
            return GdalMetadataMapping(
                source_key = geoengine_openapi_client.models.raster_properties_key.RasterPropertiesKey(
                    domain = '', 
                    key = '', ),
                target_key = geoengine_openapi_client.models.raster_properties_key.RasterPropertiesKey(
                    domain = '', 
                    key = '', ),
                target_type = 'Number'
            )
        else:
            return GdalMetadataMapping(
                source_key = geoengine_openapi_client.models.raster_properties_key.RasterPropertiesKey(
                    domain = '', 
                    key = '', ),
                target_key = geoengine_openapi_client.models.raster_properties_key.RasterPropertiesKey(
                    domain = '', 
                    key = '', ),
                target_type = 'Number',
        )
        """

    def testGdalMetadataMapping(self):
        """Test GdalMetadataMapping"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
