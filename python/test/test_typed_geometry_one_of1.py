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

from geoengine_openapi_client.models.typed_geometry_one_of1 import TypedGeometryOneOf1  # noqa: E501

class TestTypedGeometryOneOf1(unittest.TestCase):
    """TypedGeometryOneOf1 unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> TypedGeometryOneOf1:
        """Test TypedGeometryOneOf1
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `TypedGeometryOneOf1`
        """
        model = TypedGeometryOneOf1()  # noqa: E501
        if include_optional:
            return TypedGeometryOneOf1(
                multi_point = geoengine_openapi_client.models.multi_point.MultiPoint(
                    coordinates = [
                        geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                            x = 1.337, 
                            y = 1.337, )
                        ], )
            )
        else:
            return TypedGeometryOneOf1(
                multi_point = geoengine_openapi_client.models.multi_point.MultiPoint(
                    coordinates = [
                        geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                            x = 1.337, 
                            y = 1.337, )
                        ], ),
        )
        """

    def testTypedGeometryOneOf1(self):
        """Test TypedGeometryOneOf1"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
