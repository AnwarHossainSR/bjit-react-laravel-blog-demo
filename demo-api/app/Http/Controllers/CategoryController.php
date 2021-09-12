<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAllCategory()
    {
        try{
            $categories = Category::all();
            return \response([
                'categories' => $categories
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }

    public function getSingleCategory($slug)
    {
        try {
            $categories = Category::where('slug',$slug)->first();
            return \response([
                'categories' => $categories
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }

    public function storeCategory(Request $request)
    {
        try {
            $category = Category::create([
                'name' => $request->name,
                'slug' => strtolower(str_replace('','_',$request->name)),
                'description' => $request->description
            ]);
            return \response([
                'message' => 'category created successfull'
            ], status: 201);
        } catch (Exception $th) {
            return \response([
                'message' => $th,
            ], status: 404);
        }
    }

    public function updateCategory(Request $request,$id)
    {
        try {
            $category = Category::find($id);
            $category->name = $request->name;
            $category->slug = $category->slug;
            $category->description = $request->description;
            $category->save();
            return \response([
                'message' => 'Success'
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }
    public function destroyCategory( $id)
    {
        try {
            $category = Category::find($id);
            $category->delete();
            return \response([
                'message' => 'Success'
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }
}
