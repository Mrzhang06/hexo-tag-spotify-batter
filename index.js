function getUrl(url) {
  [_, type, key] = url.replace(/(^\w+:|^)\/\//, '').replace('/', ':').split(':');

  return `https://open.spotify.com/embed/${type}/${key}`;
}

function getSize(args) { 
  let type = args[1] || 'music'；
  let size = args[2] || 'compact';

  if(type == 'music' && size == 'large' ) {
	size = '100%x160'
  } else if(type == 'music' && size == 'compact' ) {
	size = '100%x86'
  } else if(type == 'podcast' && size == 'large' ) {
	size = '100%x240'
  } else if(type == 'podcast' && size == 'compact' ) {
	size = '100%x160'
  } else if(type == 'playlist' && size == 'large' ) {
	size = '100%x388'
  } else if(type == 'playlist' && size == 'compact' ) {
	size = '100%x160'
  }
  
  return size.split('x');
}

function renderSpotify(args) {
  const url = getUrl(args[0]);
  const [width, height] = getSize(args);

  return `<iframe src="${url}" width="${width}" height="${height}" frameborder="0" allowtransparency="allowtransparency" allow="encrypted-media"></iframe>`;
}

hexo.extend.tag.register('spotify', renderSpotify);
