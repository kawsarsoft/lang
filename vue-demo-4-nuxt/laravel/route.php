<?php
Route::get('i18n/{param}', function($param){
     $path = resource_path('lang/'.$param);
     $file = File::get($path);
     $response = Response::make($file, 200);
      return $response;
})->where('param','.*');
