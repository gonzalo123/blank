<?php

include __DIR__ . '/../../vendor/autoload.php';

use Silex\Application;
use G\AngularPostRequestServiceProvider;

$app = new Application();
$app->register(new AngularPostRequestServiceProvider());

$app->get("/", function (Application $app) {
    return $app->json([
        'status'  => true,
    ]);
});

$app->run();