function UnCryptMailto( s )
{
	var n = 0;
	var r = "";
	for( var i = 0; i < s.length; i++)
	{
		n = s.charCodeAt( i );
		if( n >= 8364 )
		{
			n = 128;
		}
		r += String.fromCharCode( n - 1 );
	}
	return r;
}

function linkTo_UnCryptMailto( s )
{
	location.href=UnCryptMailto( s );
}

function linkTo_UnCryptTelephoneto( s )
{
	var phone_string=UnCryptMailto( s ).substring(6);
	location.href="tel:+"+phone_string;
}