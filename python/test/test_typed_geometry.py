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

from geoengine_openapi_client.models.typed_geometry import TypedGeometry  # noqa: E501

class TestTypedGeometry(unittest.TestCase):
    """TypedGeometry unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> TypedGeometry:
        """Test TypedGeometry
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `TypedGeometry`
        """
        model = TypedGeometry()  # noqa: E501
        if include_optional:
            return TypedGeometry(
                data = None,
                multi_point = geoengine_openapi_client.models.multi_point.MultiPoint(
                    coordinates = [
                        geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                            x = 1.337, 
                            y = 1.337, )
                        ], ),
                multi_line_string = geoengine_openapi_client.models.multi_line_string.MultiLineString(
                    coordinates = [
                        [
                            geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                                x = 1.337, 
                                y = 1.337, )
                            ]
                        ], ),
                multi_polygon = geoengine_openapi_client.models.multi_polygon.MultiPolygon(
                    polygons = [
                        [
                            [
                                geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                                    x = 1.337, 
                                    y = 1.337, )
                                ]
                            ]
                        ], )
            )
        else:
            return TypedGeometry(
                data = None,
                multi_point = geoengine_openapi_client.models.multi_point.MultiPoint(
                    coordinates = [
                        geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                            x = 1.337, 
                            y = 1.337, )
                        ], ),
                multi_line_string = geoengine_openapi_client.models.multi_line_string.MultiLineString(
                    coordinates = [
                        [
                            geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                                x = 1.337, 
                                y = 1.337, )
                            ]
                        ], ),
                multi_polygon = geoengine_openapi_client.models.multi_polygon.MultiPolygon(
                    polygons = [
                        [
                            [
                                geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                                    x = 1.337, 
                                    y = 1.337, )
                                ]
                            ]
                        ], ),
        )
        """

    def testTypedGeometry(self):
        """Test TypedGeometry"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
