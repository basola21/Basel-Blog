import PropTypes from "prop-types";
import { Card, CardContent, Typography, Chip, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import CardMedia from "@mui/material/CardMedia";
import { getCategoryColor } from "../utils/colorUtils";

const BlogCard = ({ blog }) => {
  const theme = useSelector((state) => state.theme);
  const textColor = theme === "white" ? "text.primary" : "text.secondary";
  const backgroundColor = theme === "white" ? "white" : "black";

  return (
    <Card sx={{ maxWidth: 345, bgcolor: backgroundColor }}>
      <CardMedia sx={{ height: 140 }} image={blog.image} title={blog.title} />
      <CardContent sx={{ color: textColor }}>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {blog.sub_title}
        </Typography>
        {blog.categories && blog.categories.length > 0 && (
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            {blog.categories.map((category) => (
              <Chip
                key={category}
                label={category}
                variant="outlined"
                sx={{
                  borderColor: getCategoryColor(category),
                  color: getCategoryColor(category),
                }}
              />
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.string,
    image: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default BlogCard;
