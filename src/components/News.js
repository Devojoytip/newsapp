import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        //d866fb64ca56475f99447f135bc05ccb
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `NewsMonkey-${capitalizeFirstLetter(props.category)}`;
        updateNews();
    }, [])

    const handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d866fb64ca56475f99447f135bc05ccb&page=${page-1}&pageSize=${props.pageSize}`;
        // setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // setState({
        //     page: page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })

        setPage(page-1);
        updateNews();
    }

    const handleNextClick = async () => {

        setPage(page + 1 );
        updateNews();
    }

    const fetchMoreData = async () => {
        setPage(page + 1 );
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d866fb64ca56475f99447f135bc05ccb&page=${page}&pageSize=${props.pageSize}`;
        // setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    return (

        <>
            <h2 className='text-center' style={{ margin: '20px', fontFamily: 'Trebuchet MS', fontWeight: 'bolder', marginTop: '80px' }} >Today'S Headings</h2>
            {loading && <Spinner></Spinner>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner></Spinner>}
            >

                <div className='container'>
                    <div className="row">
                        {!loading &&
                            articles.map((ele) => {
                                return <div className="col-md-4 my-4" key={ele.content}>
                                    <NewsItem title={ele.title != null ? ele.title.slice(0, 45) : ''}
                                        description={ele.description != null ? ele.description.slice(0, 98) : ''} imgUrl={ele.urlToImage != null ? ele.urlToImage : 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17A47/production/_98293869_newsletterfri13.jpg'} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} name={ele.source.name} key={ele.content} ></NewsItem>
                                </div>
                            })
                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>

    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News