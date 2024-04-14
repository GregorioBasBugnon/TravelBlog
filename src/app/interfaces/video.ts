export interface video {
    page: number,
    per_page: number;
    videos: [
        {
            id: number;
            width: number;
            height: number;
            duration: number;
            full_res: null;
            tags: [];
            url: string;
            image: string;
            avg_color: null;
            user: {
                id: number;
                name: string;
                url: string;
            },
            video_files: [
                {
                    id: number;
                    quality: string;
                    file_type: string;
                    width: number;
                    height: number;
                    fps: number;
                    link: string;
                },
                {
                    id: number;
                    quality: string;
                    file_type: string;
                    width: number;
                    height: number;
                    fps: number;
                    link: string;
                },
                {
                    id: number;
                    quality: string;
                    file_type: string;
                    width: number;
                    height: number;
                    fps: number;
                    link: string;
                },
                {
                    id: number;
                    quality: string;
                    file_type: string;
                    width: number;
                    height: number;
                    fps: number;
                    link: string;
                }
            ],
            video_pictures: [
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                },
                {
                    id: number;
                    nr: number;
                    picture: string;
                }
            ]
        }
    ],
    total_results: number;
    next_page: string;
    url: string;
}


