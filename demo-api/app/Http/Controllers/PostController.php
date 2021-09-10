<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getAllPost()
    {
        try {
            $posts = Post::where('published',true)->with(['category','user'])->get();
            return \response([
                'posts' => $posts
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }
    public function getSinglePost($slug)
    {
        try {
            //$post = Post::find($slug);
            $post = Post::where([['slug',$slug],['published',true]])->with(['category','user'])->first();
            return \response([
                'post' => $post
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
