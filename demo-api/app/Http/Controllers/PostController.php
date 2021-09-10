<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getAllPost()
    {
        try {
            $posts = Post::where('published',true)->with(['user'])->latest()->get();
            $slider = Post::where('published',true)->with(['user'])->get()->random(4);
            $categories = Category::all();
            foreach ($posts as $key => $value) {
                $value->created = $value->created_at->isoFormat('Do MMM YY');
            }
            foreach ($slider as $key => $value) {
                $value->created = $value->created_at->isoFormat('Do MMM YY');
            }
            return \response([
                'posts' => $posts,
                'slider' => $slider,
                'categories' => $categories
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }
    public function getSinglePost($slug)
    {
        try {
            $post = Post::where([['slug',$slug],['published',true]])->with(['user'])->first();
            $categories = Category::all();
            $popular = Post::where('published',true)->with(['user'])->get()->random(5);
            return \response([
                'post' => $post,
                'categories' => $categories,
                'popular' => $popular
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }
    public function getPostByCategories($id)
    {
        try {
            $post = Post::where([['category_id',$id],['published',true]])->with(['user'])->get();
            $slider = Post::where('published',true)->with(['user'])->get()->random(4);
            $categories = Category::all();
            $popular = Post::where('published',true)->with(['user'])->get()->random(5);
            return \response([
                'posts' => $post,
                'slider' => $slider,
                'categories' => $categories,
                'popular' => $popular
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }

    public function store(Request $request)
    {

        try {
            if ($request->hasFile('image')){
                $image = $request->file('image');
                $imageName = time().'.'.$image->extension();
                $image->move(public_path('images/posts'),$imageName);
            }else{
                $imageName = "default.jpg";
            }

            $post = new Post();
            $post->title = $request->title;
            $post->slug = strtolower(str_replace('','_',$request->title));
            $post->body = $request->body;
            $post->published = true;
            $post->image = $imageName;
            $post->user_id = $request->user_id;
            $post->category_id = $request->category_id;
            $post->save();
            return \response([
                'message' => 'Success'
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }

    public function update(Request $request,$id)
    {
        try {
            $post = Post::find($id);
            if ($request->hasFile('image')){
                $image = $request->file('image');
                $imageName = time().'.'.$image->extension();
                $image->move(public_path('images/posts'),$imageName);
            }else{
                $imageName = "default.jpg";
            }

            $post->title = $request->title;
            $post->slug = $post->slug;
            $post->body = $request->body;
            $post->published = true;
            $post->image = $imageName;
            $post->user_id = $request->user_id;
            $post->category_id = $request->category_id;
            $post->save();
            return \response([
                'message' => 'Success'
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }

    public function destroy( $id)
    {
        try {
            $post = Post::find($id);
            $post->delete();
            return \response([
                'message' => 'Success'
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }
}
