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

from geoengine_openapi_client.models.update_layer import UpdateLayer

class TestUpdateLayer(unittest.TestCase):
    """UpdateLayer unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> UpdateLayer:
        """Test UpdateLayer
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `UpdateLayer`
        """
        model = UpdateLayer()
        if include_optional:
            return UpdateLayer(
                description = 'Example layer description',
                metadata = {
                    'key' : ''
                    },
                name = 'Example Layer',
                properties = [
                    [
                        ''
                        ]
                    ],
                symbology = None,
                workflow = None
            )
        else:
            return UpdateLayer(
                description = 'Example layer description',
                name = 'Example Layer',
                workflow = None,
        )
        """

    def testUpdateLayer(self):
        """Test UpdateLayer"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
