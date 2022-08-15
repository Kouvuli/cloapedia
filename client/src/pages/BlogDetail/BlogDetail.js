import { Grid, List } from "@mui/material"
import { useEffect, useState } from "react"
import BreadCrumb from "../../components/UI/BreadCrumb"
import styles from "./styles.module.css"
import pic1 from "../../assets/images/upload/menu_08.jpg"
import pic2 from "../../assets/images/upload/menu_05.jpg"
import pic3 from "../../assets/images/upload/blog_01.jpg"
import adspic from "../../assets/images/upload/banner_01.jpg"
import DefaultUser from "../../assets/images/default-user.jpg"
import MoreBlogCard from "../../components/Card/MoreBlogCard"
import CommentCard from "../../components/Card/CommentCard"
import RectangleButton from "../../components/UI/Button/RectangleButton"
import SideBlogCard from "../../components/Card/SideBlogCard"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import detailSlice, {
  fetchDetailById,
  fetchBlogDetailById,
  fetchCommentsById,
  createComment
} from "../../redux/reducers/detailSlice"
import { detailSelector } from "../../redux/selectors"
import { toDate } from "../../utils"
import { BASE_URL, CARD_TYPES } from "../../constants"
import parse from "html-react-parser"
import _ from "lodash"
import Preloader from "../../components/Preloader/Preloader"
import ResultNotFound from "../../components/ResultNotFound"
import CardSkeleton from "../../components/UI/CardSkeleton"
import Loading from "../../components/Loading"
import InfiniteScroll from "react-infinite-scroll-component"
import CustomizedSnackbars from "../../components/UI/CustomizedSnackbars/CustomizedSnackbars"
const BlogDetail = () => {
  const { id } = useParams()
  var type
  if (document.location.pathname.split("/")[1] === "blog") {
    type = "blog"
  } else {
    type = "default"
  }

  const dispatch = useDispatch()

  const [comment, setComment] = useState("")
  const {
    data,
    currentUser,
    relatedData,
    loading,
    error,
    comments,
    hasNextComment,
    commentsLimit,
    createCommentError,
    createCommentLoading,
    createCommentSuccess,
    commentsPage
  } = useSelector(detailSelector)
  useEffect(() => {
    dispatch(
      fetchCommentsById({
        blog_id: document.location.pathname.substring(1),
        page: commentsPage,
        limit: commentsLimit
      })
    )
    dispatch(
      detailSlice.actions.addUser(JSON.parse(localStorage.getItem("user")))
    )
    if (type === "blog") {
      // dispatch(fetchDetailById(document.location.pathname))
      // if (!_.isEmpty(data)) {
      //   dispatch(fetchAuthorData(parse(data.fields.bylineHtml).href))
      // }
      dispatch(fetchBlogDetailById(id))
    } else {
      dispatch(fetchDetailById(document.location.pathname))
    }
  }, [])

  const submitCommentHandler = (e) => {
    e.preventDefault()
    if (comment !== "") {
      dispatch(
        createComment({
          author: { id: currentUser.id },
          blog_id: document.location.pathname.substring(1),
          content: comment
        })
      )
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
  }
  const fetchMoreComments = () => {
    dispatch(
      fetchCommentsById({
        blog_id: document.location.pathname.substring(1),
        page: commentsPage,
        limit: commentsLimit
      })
    )
  }
  return (
    <>
      {loading && <Preloader />}
      {!loading && !_.isEmpty(data) && (
        <section className={`${styles.section} ${styles.wb}`}>
          <Grid
            container
            maxWidth="1170px"
            marginLeft={{ lg: "auto", xs: "0px" }}
            marginRight={{ lg: "auto", xs: "0px" }}
            padding={{ lg: "0px", md: "0 20px", xs: "0px 10px" }}
            columnSpacing={{ lg: "24px" }}
          >
            {type === "default" && (
              <>
                <Grid item xs={12} lg={9}>
                  <div className={styles["page-wrapper"]}>
                    <div className={styles["blog-title-area"]}>
                      <span className={styles["color-aqua"]}>
                        <a href="" title="">
                          {data.sectionName}
                        </a>
                      </span>

                      <h3>{data.fields.headline}</h3>

                      <div
                        className={`${styles["blog-meta"]} ${styles["big-meta"]}`}
                      >
                        <small>
                          <a href="" title="">
                            {toDate(data.fields.lastModified)}
                          </a>
                        </small>
                        <small>
                          <a href="" title="">
                            {data.fields.byline}
                          </a>
                        </small>
                        <small>
                          <a href="#" title="">
                            <i className="fa fa-eye"></i>{" "}
                            {data.fields.charCount}
                          </a>
                        </small>
                      </div>

                      <div className={styles["post-sharing"]}>
                        <ul className={styles["list-inline"]}>
                          <li>
                            <button
                              className={`${styles["fb-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                            >
                              <i className="fa fa-facebook"></i>{" "}
                              <span className="down-mobile">
                                Share on Facebook
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={`${styles["tw-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                            >
                              <i className="fa fa-twitter"></i>{" "}
                              <span className="down-mobile">
                                Tweet on Twitter
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              href="#"
                              className={`${styles["gp-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                            >
                              <i className="fa fa-google-plus"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className={styles["blog-content"]}>
                      <div className={styles.pp}>
                        <h3>{parse(data.fields.trailText)}</h3>
                      </div>
                      <div className={styles.pp}>
                        {parse(data.fields.main)}
                        {/* <p>
                  In lobortis pharetra mattis. Morbi nec nibh iaculis,{" "}
                  <a href="#">bibendum augue a</a>, ultrices nulla. Nunc velit
                  ante, lacinia id tincidunt eget, faucibus nec nisl. In mauris
                  purus, bibendum et gravida dignissim, venenatis commodo lacus.
                  Duis consectetur quis nisi nec accumsan. Pellentesque enim
                  velit, ut tempor turpis. Mauris felis neque, egestas in
                  lobortis et,iaculis at nunc ac, rhoncus sagittis ipsum.{" "}
                </p>

                <h3>
                  <strong>
                    Maecenas non convallis quam, eu sodales justo. Pellentesque
                    quis lectus elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </strong>
                </h3>

                <p>
                  Donec nec metus sed leo sollicitudin ornare sed consequat
                  neque. Aliquam iaculis neque quis dui venenatis, eget posuere
                  felis viverra. Ut sit amet feugiat elit, nec elementum velit.
                  Sed eu nisl convallis, efficitur turpis eu, euismod nunc.
                  Proin neque enim, malesuada non lobortis nec, facilisis et
                  lectus. Ie consectetur. Nam eget neque ac ex fringilla
                  dignissim eu ac est. Nunc et nisl vel odio posuere.{" "}
                </p>

                <p>
                  Vivamus non condimentum orci. Pellentesque venenatis nibh sit
                  amet est vehicula lobortis. Cras eget aliquet eros. Nunc
                  lectus elit, suscipit at nunc sed, finibus imperdiet ipsum.
                  Maecenas dapibus neque sodales nulla finibus volutpat. Integer
                  pulvinar massa vitae ultrices posuere. Proin ut tempor turpis.
                  Mauris felis neque, egestas in lobortis et, sodales non ante.
                  Ut vestibulum libero quis luctus tempus. Nullam eget dignissim
                  massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam
                  et hendrerit nisl massa nunc.{" "}
                </p> */}
                      </div>

                      <div className={styles.pp}>
                        {/* <h3>
                  <strong>
                    Nam non velit est. Sed lobortis arcu vitae nunc molestie
                    consectetur. Nam eget neque ac ex fringilla dignissim eu ac
                    est. Nunc et nisl vel odio posuere.{" "}
                  </strong>
                </h3>

                <p>
                  Vivamus non condimentum orci. Pellentesque venenatis nibh sit
                  amet est vehicula lobortis. Cras eget aliquet eros. Nunc
                  lectus elit, suscipit at nunc sed, finibus imperdiet ipsum.
                  Maecenas dapibus neque sodales nulla finibus volutpat. Integer
                  pulvinar massa vitae ultrices posuere. Proin ut tempor turpis.
                  Mauris felis neque, egestas in lobortis et, sodales non ante.
                  Ut vestibulum libero quis luctus tempus. Nullam eget dignissim
                  massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam
                  et hendrerit nisl massa nunc.{" "}
                </p> */}
                        {parse(data.fields.body)}
                        {/* <p>
                  Morbi pharetra porta consequat. Aenean et diam sapien.{" "}
                  <a href="#">Interdum et malesuada</a> fames ac ante ipsum
                  primis in faucibus. Pellentesque dictum ligula iaculis,
                  feugiat metus eu, sollicitudin ex. Quisque eu ullamcorper
                  ligula. In vel ex ac purus finibus viverra. Maecenas pretium
                  lobortis turpis. Fusce lacinia nisi in tortor massa nunc.
                </p> */}
                      </div>
                    </div>

                    <div className={styles["blog-title-area"]}>
                      <div className={styles["tag-cloud-single"]}>
                        <span>Tags</span>
                        {data.tags.map((tag, i) => {
                          if (tag.type === "keyword") {
                            return (
                              <small key={i}>
                                <a href={tag.webUrl} title="">
                                  {tag.webTitle}
                                </a>
                              </small>
                            )
                          }
                        })}
                      </div>

                      <div className={styles["post-sharing"]}>
                        <ul className={styles["list-inline"]}>
                          <li>
                            <button
                              className={`${styles["fb-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                            >
                              <i className="fa fa-facebook"></i>{" "}
                              <span className="down-mobile">
                                Share on Facebook
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={`${styles["tw-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                            >
                              <i className="fa fa-twitter"></i>{" "}
                              <span className="down-mobile">
                                Tweet on Twitter
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={`${styles["gp-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                            >
                              <i className="fa fa-google-plus"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Grid container>
                      <Grid item xs={12}>
                        <div
                          className={`${styles["banner-spot"]} ${styles["clearfix"]}`}
                        >
                          <div className={styles["banner-img"]}>
                            <img src={adspic} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </Grid>
                    </Grid>

                    <hr className={styles.invis1} />

                    <div className="custombox prevnextpost clearfix">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="blog-list-widget">
                            <div className="list-group">
                              <a
                                href="single.html"
                                className="list-group-item list-group-item-action flex-column align-items-start"
                              >
                                <div className="w-100 justify-content-between text-right">
                                  <img
                                    src="upload/blog_square_02.jpg"
                                    alt=""
                                    className="img-fluid float-right"
                                  />
                                  <h5 className="mb-1">
                                    5 Beautiful buildings you need to before
                                    dying
                                  </h5>
                                  <small>Prev Post</small>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="blog-list-widget">
                            <div className="list-group">
                              <a
                                href="single.html"
                                className="list-group-item list-group-item-action flex-column align-items-start"
                              >
                                <div className="w-100 justify-content-between">
                                  <img
                                    src="upload/blog_square_03.jpg"
                                    alt=""
                                    className="img-fluid float-left"
                                  />
                                  <h5 className="mb-1">
                                    Let's make an introduction to the glorious
                                    world of history
                                  </h5>
                                  <small>Next Post</small>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className={styles.invis1} />
                    {data.tags &&
                      data.tags.map((tag, i) => {
                        if (tag.type === "contributor") {
                          return (
                            <div
                              key={i}
                              className={`${styles.custombox} ${styles.authorbox} ${styles.clearfix}"`}
                            >
                              <h4 className={styles["small-title"]}>
                                About author
                              </h4>
                              <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                  <img
                                    src={
                                      tag.bylineImageUrl
                                        ? tag.bylineImageUrl
                                        : DefaultUser
                                    }
                                    alt=""
                                    className="img-fluid rounded-circle"
                                  />
                                </div>

                                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                  <h4>
                                    {tag.firstName} {tag.lastName}
                                  </h4>
                                  {tag.bio && parse(tag.bio)}

                                  <div className={styles.topsocial}>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title="Facebook"
                                    >
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title="Youtube"
                                    >
                                      <i className="fa fa-youtube"></i>
                                    </a>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title="Pinterest"
                                    >
                                      <i className="fa fa-pinterest"></i>
                                    </a>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title="Twitter"
                                    >
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title="Instagram"
                                    >
                                      <i className="fa fa-instagram"></i>
                                    </a>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title="Website"
                                    >
                                      <i className="fa fa-link"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        }
                      })}

                    <hr className={styles.invis1} />

                    {/* <div className={`${styles.custombox} ${styles.clearfix}`}>
                  <h4 className={styles["small-title"]}>You may also like</h4>
                  <Grid container columnSpacing={3}>
                    <Grid item xs={12} md={6}>
                      <MoreBlogCard />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <MoreBlogCard />
                    </Grid>
                  </Grid>
                </div> */}

                    <hr className={styles.invis1} />
                    {createCommentError && (
                      <CustomizedSnackbars
                        title="Insert comment failed!"
                        type="error"
                      />
                    )}
                    {createCommentSuccess && (
                      <CustomizedSnackbars
                        title="Insert comment success!"
                        type="success"
                      />
                    )}
                    <div className={`${styles.custombox} ${styles.clearfix}`}>
                      <h4 className={styles["small-title"]}>Comments</h4>
                      <Grid container>
                        <Grid item xs={12}>
                          <div className={styles["comments-list"]}>
                            {!_.isEmpty(comments) && (
                              <InfiniteScroll
                                dataLength={comments.length}
                                next={fetchMoreComments}
                                hasMore={hasNextComment}
                                loader={
                                  <div style={{ marginTop: "170px" }}>
                                    <Loading />
                                    <CardSkeleton type={CARD_TYPES.SMALL} />
                                  </div>
                                }
                              >
                                <List sx={{ maxHeight: "800px" }}>
                                  {comments.map((comment, i) => {
                                    return (
                                      <CommentCard data={comment} key={i} />
                                    )
                                  })}
                                </List>
                              </InfiniteScroll>
                            )}
                          </div>
                        </Grid>
                      </Grid>
                    </div>

                    <hr className={styles.invis1} />

                    <div className={`${styles.custombox} ${styles.clearfix}`}>
                      <h4 className={styles["small-title"]}>Leave a Reply</h4>
                      <Grid container>
                        <Grid item xs={12}>
                          <form className={styles["form-wrapper"]}>
                            <textarea
                              className={styles["form-control"]}
                              placeholder="Your comment"
                              value={comment}
                              onChange={(e) => {
                                setComment(e.target.value)
                              }}
                            ></textarea>
                            <button
                              className={styles["submit-btn"]}
                              onClick={submitCommentHandler}
                            >
                              Submit Comment
                            </button>
                          </form>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={12} lg={3}>
                  <div className={styles.sidebar}>
                    {relatedData.length > 0 && (
                      <div className={styles.widget}>
                        <h2 className={styles["widget-title"]}>
                          Related Posts
                        </h2>
                        <div className={styles["blog-list-widget"]}>
                          <div className={styles["list-group"]}>
                            {relatedData.map((rel) => {
                              return <SideBlogCard key={rel.id} data={rel} />
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Grid>
              </>
            )}
            {type === "blog" && (
              <>
                <Grid item xs={12}>
                  <div className={styles["page-wrapper"]}>
                    <div className={styles["blog-title-area"]}>
                      <span className={styles["color-aqua"]}>
                        <a title="">Blog</a>
                      </span>

                      <h3>{data.headline}</h3>

                      <div
                        className={`${styles["blog-meta"]} ${styles["big-meta"]}`}
                      >
                        <small>
                          <a title="">{toDate(data.create_at)}</a>
                        </small>
                        <small>
                          <a title="">{data.author.username}</a>
                        </small>
                        {/* <small>
                          <a href="#" title="">
                            <i className="fa fa-eye"></i>{" "}
                            {data.fields.charCount}
                          </a>
                        </small> */}
                      </div>

                      <div className={styles["post-sharing"]}>
                        <ul className={styles["list-inline"]}>
                          <li>
                            <button
                              className={`${styles["fb-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                            >
                              <i className="fa fa-facebook"></i>{" "}
                              <span className="down-mobile">
                                Share on Facebook
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={`${styles["tw-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                            >
                              <i className="fa fa-twitter"></i>{" "}
                              <span className="down-mobile">
                                Tweet on Twitter
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              href="#"
                              className={`${styles["gp-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                            >
                              <i className="fa fa-google-plus"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className={styles["blog-content"]}>
                      <div className={styles.pp}>
                        <h3>{data.trailText && data.trailText}</h3>
                      </div>
                      <div className={styles.pp}>{parse(data.content)}</div>
                    </div>

                    <div className={styles["blog-title-area"]}>
                      {/* <div className={styles["tag-cloud-single"]}>
                        <span>Tags</span>
                        {data.tags.map((tag, i) => {
                          if (tag.type === "keyword") {
                            return (
                              <small key={i}>
                                <a href={tag.webUrl} title="">
                                  {tag.webTitle}
                                </a>
                              </small>
                            )
                          }
                        })}
                      </div> */}
                    </div>

                    <Grid container>
                      <Grid item xs={12}>
                        <div
                          className={`${styles["banner-spot"]} ${styles["clearfix"]}`}
                        >
                          <div className={styles["banner-img"]}>
                            <img src={adspic} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </Grid>
                    </Grid>

                    <hr className={styles.invis1} />

                    <div
                      className={`${styles.custombox} ${styles.authorbox} ${styles.clearfix}"`}
                    >
                      <h4 className={styles["small-title"]}>About author</h4>
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                          <img
                            src={
                              data.author.avatar
                                ? data.author.avatar
                                : DefaultUser
                            }
                            alt=""
                            className="img-fluid rounded-circle"
                          />
                        </div>

                        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                          <h4>{data.author.fullname}</h4>
                          {data.author.job && data.author.address && (
                            <>
                              A {data.author.job && data.author.job}, live at{" "}
                              {data.author.address && data.author.address}
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <hr className={styles.invis1} />

                    {/* <div className={`${styles.custombox} ${styles.clearfix}`}>
                  <h4 className={styles["small-title"]}>You may also like</h4>
                  <Grid container columnSpacing={3}>
                    <Grid item xs={12} md={6}>
                      <MoreBlogCard />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <MoreBlogCard />
                    </Grid>
                  </Grid>
                </div> */}

                    <hr className={styles.invis1} />
                    {createCommentError && (
                      <CustomizedSnackbars
                        title="Insert comment failed!"
                        type="error"
                      />
                    )}
                    {createCommentSuccess && (
                      <CustomizedSnackbars
                        title="Insert comment success!"
                        type="success"
                      />
                    )}
                    <div className={`${styles.custombox} ${styles.clearfix}`}>
                      <h4 className={styles["small-title"]}>Comments</h4>
                      <Grid container>
                        <Grid item xs={12}>
                          <div className={styles["comments-list"]}>
                            {!_.isEmpty(comments) && (
                              <InfiniteScroll
                                dataLength={comments.length}
                                next={fetchMoreComments}
                                hasMore={hasNextComment}
                                loader={
                                  <div style={{ marginTop: "170px" }}>
                                    <Loading />
                                    <CardSkeleton type={CARD_TYPES.SMALL} />
                                  </div>
                                }
                              >
                                <List sx={{ maxHeight: "800px" }}>
                                  {comments.map((comment, i) => {
                                    return (
                                      <CommentCard data={comment} key={i} />
                                    )
                                  })}
                                </List>
                              </InfiniteScroll>
                            )}
                          </div>
                        </Grid>
                      </Grid>
                    </div>

                    <hr className={styles.invis1} />

                    <div className={`${styles.custombox} ${styles.clearfix}`}>
                      <h4 className={styles["small-title"]}>Leave a Reply</h4>
                      <Grid container>
                        <Grid item xs={12}>
                          <form className={styles["form-wrapper"]}>
                            <textarea
                              className={styles["form-control"]}
                              placeholder="Your comment"
                              value={comment}
                              onChange={(e) => {
                                setComment(e.target.value)
                              }}
                            ></textarea>
                            <button
                              className={styles["submit-btn"]}
                              onClick={submitCommentHandler}
                            >
                              Submit Comment
                            </button>
                          </form>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </>
            )}
          </Grid>
        </section>
      )}
      {error && (
        <section className={`${styles.section} ${styles.wb}`}>
          <Grid
            container
            maxWidth="1170px"
            marginLeft="auto"
            marginRight="auto"
            columnSpacing={3}
          >
            <Grid item xs={12} lg={9}>
              <ResultNotFound message="Result Not Found" />
            </Grid>

            <Grid item xs={12} lg={3}>
              <div className={styles.sidebar}>
                {/* <div className={styles.widget}>
                  <h2 className={styles["widget-title"]}>Search</h2>
                  <form
                    className={`${styles["form-inline"]} ${styles["search-form"]}`}
                  >
                    <div className={styles["form-group"]}>
                      <input
                        type="text"
                        className={styles["form-control"]}
                        placeholder="Search on the site"
                      />
                    </div>
                    <RectangleButton>
                      <i className="fa fa-search"></i>
                    </RectangleButton>
                  </form>
                </div> */}

                {relatedData.length > 0 && (
                  <div className={styles.widget}>
                    <h2 className={styles["widget-title"]}>Related Posts</h2>
                    <div className={styles["blog-list-widget"]}>
                      <div className={styles["list-group"]}>
                        {relatedData.map((rel) => {
                          return <SideBlogCard key={rel.id} data={rel} />
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </section>
      )}
    </>
  )
}

export default BlogDetail
