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

from geoengine_openapi_client.models.measurement_classification import MeasurementClassification

class TestMeasurementClassification(unittest.TestCase):
    """MeasurementClassification unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> MeasurementClassification:
        """Test MeasurementClassification
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `MeasurementClassification`
        """
        model = MeasurementClassification()
        if include_optional:
            return MeasurementClassification(
                classes = {
                    'key' : ''
                    },
                measurement = '',
                type = 'classification'
            )
        else:
            return MeasurementClassification(
                classes = {
                    'key' : ''
                    },
                measurement = '',
                type = 'classification',
        )
        """

    def testMeasurementClassification(self):
        """Test MeasurementClassification"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()