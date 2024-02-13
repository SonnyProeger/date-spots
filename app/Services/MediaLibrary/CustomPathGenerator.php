<?php

namespace App\Services\MediaLibrary;

use App\Models\Datespot;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator;

class CustomPathGenerator implements PathGenerator
{
    /*
    * Get the path for the given media, relative to the root storage path.
    */
    public function getPath(Media $media): string
    {
        return $this->getBasePath($media).'/';
    }

    /*
     * Get the path for conversions of the given media, relative to the root storage path.
     */
    public function getPathForConversions(Media $media): string
    {
        return $this->getBasePath($media).'/conversions/';
    }

    /*
     * Get the path for responsive images of the given media, relative to the root storage path.
     */
    public function getPathForResponsiveImages(Media $media): string
    {
        return $this->getBasePath($media).'/responsive-images/';
    }

    /*
     * Get a unique base path for the given media.
     */
    protected function getBasePath(Media $media): string
    {
        $model = Datespot::findOrFail($media->model_id);

        $directory = $model->datespot_id;

        $mediaTypeDirectory = $media->collection_name;

        return "media/{$directory}/{$mediaTypeDirectory}/$media->uuid";
    }
}
