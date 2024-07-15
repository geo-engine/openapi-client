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

from geoengine_openapi_client.models.gdal_meta_data_static import GdalMetaDataStatic  # noqa: E501

class TestGdalMetaDataStatic(unittest.TestCase):
    """GdalMetaDataStatic unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> GdalMetaDataStatic:
        """Test GdalMetaDataStatic
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `GdalMetaDataStatic`
        """
        model = GdalMetaDataStatic()  # noqa: E501
        if include_optional:
            return GdalMetaDataStatic(
                cache_ttl = 0,
                params = geoengine_openapi_client.models.gdal_dataset_parameters.GdalDatasetParameters(
                    allow_alphaband_as_mask = True, 
                    file_not_found_handling = 'NoData', 
                    file_path = '', 
                    gdal_config_options = [
                        [
                            ''
                            ]
                        ], 
                    gdal_open_options = [
                        ''
                        ], 
                    geo_transform = geoengine_openapi_client.models.gdal_dataset_geo_transform.GdalDatasetGeoTransform(
                        origin_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                            x = 1.337, 
                            y = 1.337, ), 
                        x_pixel_size = 1.337, 
                        y_pixel_size = 1.337, ), 
                    height = 0, 
                    no_data_value = 1.337, 
                    properties_mapping = [
                        geoengine_openapi_client.models.gdal_metadata_mapping.GdalMetadataMapping(
                            source_key = geoengine_openapi_client.models.raster_properties_key.RasterPropertiesKey(
                                domain = '', 
                                key = '', ), 
                            target_key = geoengine_openapi_client.models.raster_properties_key.RasterPropertiesKey(
                                domain = '', 
                                key = '', ), 
                            target_type = 'Number', )
                        ], 
                    rasterband_channel = 0, 
                    width = 0, ),
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
                time = geoengine_openapi_client.models.time_interval.TimeInterval(
                    end = 56, 
                    start = 56, )
            )
        else:
            return GdalMetaDataStatic(
                params = geoengine_openapi_client.models.gdal_dataset_parameters.GdalDatasetParameters(
                    allow_alphaband_as_mask = True, 
                    file_not_found_handling = 'NoData', 
                    file_path = '', 
                    gdal_config_options = [
                        [
                            ''
                            ]
                        ], 
                    gdal_open_options = [
                        ''
                        ], 
                    geo_transform = geoengine_openapi_client.models.gdal_dataset_geo_transform.GdalDatasetGeoTransform(
                        origin_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                            x = 1.337, 
                            y = 1.337, ), 
                        x_pixel_size = 1.337, 
                        y_pixel_size = 1.337, ), 
                    height = 0, 
                    no_data_value = 1.337, 
                    properties_mapping = [
                        geoengine_openapi_client.models.gdal_metadata_mapping.GdalMetadataMapping(
                            source_key = geoengine_openapi_client.models.raster_properties_key.RasterPropertiesKey(
                                domain = '', 
                                key = '', ), 
                            target_key = geoengine_openapi_client.models.raster_properties_key.RasterPropertiesKey(
                                domain = '', 
                                key = '', ), 
                            target_type = 'Number', )
                        ], 
                    rasterband_channel = 0, 
                    width = 0, ),
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
        )
        """

    def testGdalMetaDataStatic(self):
        """Test GdalMetaDataStatic"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
