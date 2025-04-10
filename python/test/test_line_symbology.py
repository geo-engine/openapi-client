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

from geoengine_openapi_client.models.line_symbology import LineSymbology

class TestLineSymbology(unittest.TestCase):
    """LineSymbology unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> LineSymbology:
        """Test LineSymbology
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `LineSymbology`
        """
        model = LineSymbology()
        if include_optional:
            return LineSymbology(
                auto_simplified = True,
                stroke = geoengine_openapi_client.models.stroke_param.StrokeParam(
                    color = null, 
                    width = null, ),
                text = geoengine_openapi_client.models.text_symbology.TextSymbology(
                    attribute = '', 
                    fill_color = null, 
                    stroke = geoengine_openapi_client.models.stroke_param.StrokeParam(
                        color = null, 
                        width = null, ), ),
                type = 'line'
            )
        else:
            return LineSymbology(
                auto_simplified = True,
                stroke = geoengine_openapi_client.models.stroke_param.StrokeParam(
                    color = null, 
                    width = null, ),
                type = 'line',
        )
        """

    def testLineSymbology(self):
        """Test LineSymbology"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
