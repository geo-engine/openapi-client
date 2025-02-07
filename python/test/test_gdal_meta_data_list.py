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

from geoengine_openapi_client.models.gdal_meta_data_list import GdalMetaDataList  # noqa: E501

class TestGdalMetaDataList(unittest.TestCase):
    """GdalMetaDataList unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> GdalMetaDataList:
        """Test GdalMetaDataList
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `GdalMetaDataList`
        """
        model = GdalMetaDataList()  # noqa: E501
        if include_optional:
            return GdalMetaDataList(
                params = [
                    geoengine_openapi_client.models.gdal_loading_info_temporal_slice.GdalLoadingInfoTemporalSlice(
                        cache_ttl = 0, 
                        params = null, 
                        time = geoengine_openapi_client.models.time_interval.TimeInterval(
                            end = 56, 
                            start = 56, ), )
                    ],
                result_descriptor = geoengine_openapi_client.models.raster_result_descriptor.RasterResultDescriptor(
                    bands = [
                        geoengine_openapi_client.models.raster_band_descriptor.RasterBandDescriptor(
                            measurement = null, 
                            name = '', )
                        ], 
                    bbox = null, 
                    data_type = 'U8', 
                    resolution = null, 
                    spatial_reference = '', 
                    time = null, ),
                type = 'GdalMetaDataList'
            )
        else:
            return GdalMetaDataList(
                params = [
                    geoengine_openapi_client.models.gdal_loading_info_temporal_slice.GdalLoadingInfoTemporalSlice(
                        cache_ttl = 0, 
                        params = null, 
                        time = geoengine_openapi_client.models.time_interval.TimeInterval(
                            end = 56, 
                            start = 56, ), )
                    ],
                result_descriptor = geoengine_openapi_client.models.raster_result_descriptor.RasterResultDescriptor(
                    bands = [
                        geoengine_openapi_client.models.raster_band_descriptor.RasterBandDescriptor(
                            measurement = null, 
                            name = '', )
                        ], 
                    bbox = null, 
                    data_type = 'U8', 
                    resolution = null, 
                    spatial_reference = '', 
                    time = null, ),
                type = 'GdalMetaDataList',
        )
        """

    def testGdalMetaDataList(self):
        """Test GdalMetaDataList"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
