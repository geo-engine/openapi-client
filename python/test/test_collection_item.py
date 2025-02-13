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

from geoengine_openapi_client.models.collection_item import CollectionItem

class TestCollectionItem(unittest.TestCase):
    """CollectionItem unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CollectionItem:
        """Test CollectionItem
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CollectionItem`
        """
        model = CollectionItem()
        if include_optional:
            return CollectionItem(
                description = '',
                id = geoengine_openapi_client.models.provider_layer_id.ProviderLayerId(
                    layer_id = '', 
                    provider_id = '', ),
                name = '',
                properties = [
                    [
                        ''
                        ]
                    ],
                type = 'collection'
            )
        else:
            return CollectionItem(
                description = '',
                id = geoengine_openapi_client.models.provider_layer_id.ProviderLayerId(
                    layer_id = '', 
                    provider_id = '', ),
                name = '',
                type = 'collection',
        )
        """

    def testCollectionItem(self):
        """Test CollectionItem"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
