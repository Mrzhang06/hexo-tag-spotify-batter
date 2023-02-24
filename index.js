function getUrl(url) {
  [_, type, key] = url.replace(/(^\w+:|^)\/\//, '').replace('/', ':').split(':');

  return `https://open.spotify.com/embed/${type}/${key}`;
}

function getSize(type, size) { 
  let type = type || 'music'；
  let size = size || 'compact';

  if(type == 'music' && size == 'large' ) {
	size = '100%x152'
  } else if(type == 'music' && size == 'compact' ) {
	size = '100%x80'
  } else if(type == 'podcast' && size == 'large' ) {
	size = '100%x232'
  } else if(type == 'podcast' && size == 'compact' ) {
	size = '100%x152'
  } else if(type == 'playlist' && size == 'large' ) {
	size = '100%x380'
  } else if(type == 'playlist' && size == 'compact' ) {
	size = '100%x152'
  }
  
  return size.split('x');
}

function renderSpotify(args) {
  const config = hexo.config.spotify || {};
  const url = getUrl(args[0]);
  const [width, height] = getSize(args[1], args[2]);

  return `<iframe src="${url}" width="${width}" height="${height}" frameborder="0" allowtransparency="allowtransparency" allow="encrypted-media"></iframe>`;
}

hexo.extend.tag.register('spotify', renderSpotify);