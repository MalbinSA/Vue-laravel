<?php

namespace App\Http\Resources\Person;

use Illuminate\Http\Resources\Json\JsonResource;

class PersonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
//        return parent::toArray($request);
    return [
        'id' => $this->id,
        'name' => $this->name,
        'age' => $this->age,
        'job' => $this->job
    ];
    }
}
