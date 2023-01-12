<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movie = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://cdn.pixabay.com/photo/2018/03/27/18/52/football-3266982_1280.jpg',
                'rating' => 4.9,
                'is_featured' => 1
            ],

            [
                'name' => 'The Goodfather',
                'slug' => 'the-goodfather',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=sY1S34973zA',
                'thumbnail' => 'https://cdn.pixabay.com/photo/2018/06/20/22/59/train-3487575_1280.jpg',
                'rating' => 4.5,
                'is_featured' => 0
            ],

            [
                'name' => 'The Goodfather: Part II',
                'slug' => 'the-goodfather-part-ii',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=sY1S34973zA',
                'thumbnail' => 'https://cdn.pixabay.com/photo/2018/03/27/18/51/mohr-heads-3266981_1280.jpg',
                'rating' => 4.0,
                'is_featured' => 0
            ],
        ];

        Movie::insert($movie);
    }
}
