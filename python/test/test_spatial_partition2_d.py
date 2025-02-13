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

from geoengine_openapi_client.models.spatial_partition2_d import SpatialPartition2D

class TestSpatialPartition2D(unittest.TestCase):
    """SpatialPartition2D unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> SpatialPartition2D:
        """Test SpatialPartition2D
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `SpatialPartition2D`
        """
        model = SpatialPartition2D()
        if include_optional:
            return SpatialPartition2D(
                lower_right_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                    x = 1.337, 
                    y = 1.337, ),
                upper_left_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                    x = 1.337, 
                    y = 1.337, )
            )
        else:
            return SpatialPartition2D(
                lower_right_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                    x = 1.337, 
                    y = 1.337, ),
                upper_left_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                    x = 1.337, 
                    y = 1.337, ),
        )
        """

    def testSpatialPartition2D(self):
        """Test SpatialPartition2D"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
