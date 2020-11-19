<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'stripe' => [
        'publishable_key' => env('STRIPE_PK'),
        'secret_key' => env('STRIPE_SK'),
        'client_id' => env('STRIPE_CLIENT_ID'),
        'webhook_secret' => env('STRIPE_WEBHOOK_SECRET')
    ],

    'gtm' => [
        'id' => env('GTM_ID', null),
        'triggers' => explode(',', env('GTM_TRIGGERS', ''))
    ],

    'analytics' => [
        'id' => env('ANALYTICS_ID')
    ],

    'intercom' => [
        'app_id' => env('INTERCOM_APP_ID'),
        'id_verification_secret' => env('INTERCOM_ID_VERIFICATION_SECRET'),
    ]

];
